const getBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }

  return 'http://localhost:8000/api';
};

export async function fetchApiData(resource) {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/${resource}/`);

  if (!response.ok) {
    throw new Error(`Failed to load ${resource}`);
  }

  const data = await response.json();
  if (Array.isArray(data)) {
    return data;
  }

  if (data && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

export function getApiUrl(endpoint) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${endpoint}`;
  }

  return `http://localhost:8000${endpoint}`;
}
