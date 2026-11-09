/**
 * Theme state machine. This file is the only owner of light/dark logic.
 *
 *   Preference (what the visitor chose)        Resolved (what the page shows)
 *   "light" | "dark"  in localStorage    ->    that value
 *   nothing stored    (follow system)    ->    prefers-color-scheme
 *
 * Runtime source of truth is `html[data-theme]`:
 *   - set before first paint by `themeInitScript` (rendered in layout.tsx),
 *   - read by CSS in globals.css, including the toggle button's label,
 *   - flipped by `toggleTheme`.
 * Do not mirror it into React state; that creates a second copy to keep in sync.
 *
 * Transitions
 *   boot            -> resolve(stored, system) and apply
 *   toggle          -> store the opposite of what is shown, apply it
 *   system change   -> apply the new system value, only while nothing is stored
 */

export const THEME_STORAGE_KEY = "lucky-theme";
export const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export type Theme = "light" | "dark";
/** `null` means no stored choice: follow the system. */
export type ThemePreference = Theme | null;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function resolveTheme(
  preference: ThemePreference,
  systemPrefersDark: boolean,
): Theme {
  return preference ?? (systemPrefersDark ? "dark" : "light");
}

export function readPreference(): ThemePreference {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function systemPrefersDark(): boolean {
  return window.matchMedia(DARK_SCHEME_QUERY).matches;
}

/** The theme the page is showing right now. */
export function getTheme(): Theme {
  const shown = document.documentElement.dataset.theme;
  return isTheme(shown)
    ? shown
    : resolveTheme(readPreference(), systemPrefersDark());
}

/** Shows `theme` on the page. Does not touch the stored preference. */
export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/** Records the visitor's choice and shows it. */
export function setPreference(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked). The page still switches.
  }
  applyTheme(theme);
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  setPreference(next);
  return next;
}

/**
 * Keeps the page in step with the system theme while no choice is stored.
 * Returns an unsubscribe function, so it can be passed straight to `useEffect`.
 */
export function followSystemTheme(): () => void {
  const media = window.matchMedia(DARK_SCHEME_QUERY);
  const sync = () => {
    if (readPreference() === null) {
      applyTheme(media.matches ? "dark" : "light");
    }
  };
  // Catches a system change between first paint and hydration.
  sync();
  media.addEventListener("change", sync);
  return () => media.removeEventListener("change", sync);
}

/**
 * Runs inline before first paint so the first frame is already the right theme.
 * Kept closure-free and dependency-free on purpose: it is serialised with
 * `toString()` and handed to the browser as a plain script, the same trick
 * next-themes uses. It mirrors `resolveTheme` + `applyTheme`.
 */
function bootstrapTheme(storageKey: string, darkQuery: string) {
  try {
    const stored = window.localStorage.getItem(storageKey);
    const theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia(darkQuery).matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    // No storage or no matchMedia: CSS defaults to light.
  }
}

export const themeInitScript = `(${bootstrapTheme.toString()})(${JSON.stringify(
  THEME_STORAGE_KEY,
)}, ${JSON.stringify(DARK_SCHEME_QUERY)});`;
