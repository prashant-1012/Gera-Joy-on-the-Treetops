const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_id'] as const;

export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_id: string;
}

const STORAGE_KEY = 'gera_utm_params';

// Reads utm_source/utm_medium/utm_id from the current URL and merges them into
// whatever was already captured earlier this session (sessionStorage), so the
// values survive internal navigation even after the query string is gone from
// the address bar — a visitor who lands via an ad, browses a bit, then opens
// the enquiry form should still get attributed correctly.
export function captureUtmParams(): UtmParams {
  let stored: Partial<UtmParams> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}');
  } catch {
    stored = {};
  }

  const searchParams = new URLSearchParams(window.location.search);
  const fromUrl: Partial<UtmParams> = {};
  let hasNewValue = false;
  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      fromUrl[key] = value;
      hasNewValue = true;
    }
  }

  const merged = {...stored, ...fromUrl};
  if (hasNewValue) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  }

  return {
    utm_source: merged.utm_source ?? '',
    utm_medium: merged.utm_medium ?? '',
    utm_id: merged.utm_id ?? '',
  };
}
