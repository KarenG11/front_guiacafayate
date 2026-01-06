// Helper para manejar respuestas
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error en la petición' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper para obtener headers con autenticación
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// ===================
// AUTH API
// ===================
export const authAPI = {
  registro: async (userData) => {
    const response = await fetch(import.meta.env.VITE_API_AUTH_REGISTRO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  login: async (credentials) => {
    const response = await fetch(import.meta.env.VITE_API_AUTH_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return handleResponse(response);
  },

  getPerfil: async () => {
    const response = await fetch(import.meta.env.VITE_API_AUTH_PERFIL, {
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  updatePerfil: async (userData) => {
    const response = await fetch(import.meta.env.VITE_API_AUTH_UPDATE_PERFIL, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  cambiarPassword: async (passwords) => {
    const response = await fetch(import.meta.env.VITE_API_AUTH_CAMBIAR_PASSWORD, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(passwords)
    });
    return handleResponse(response);
  }
};

// ===================
// CATEGORIAS API
// ===================
export const categoriasAPI = {
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${import.meta.env.VITE_API_CATEGORIAS_LIST}${queryParams ? `?${queryParams}` : ''}`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_CATEGORIAS_BASE}/${id}`);
    return handleResponse(response);
  },

  create: async (categoriaData) => {
    const response = await fetch(import.meta.env.VITE_API_CATEGORIAS_BASE, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(categoriaData)
    });
    return handleResponse(response);
  },

  update: async (id, categoriaData) => {
    const response = await fetch(`${import.meta.env.VITE_API_CATEGORIAS_BASE}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(categoriaData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_CATEGORIAS_BASE}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// ===================
// TIPO CATEGORIAS API
// ===================
export const tipoCategoriaAPI = {
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${import.meta.env.VITE_API_TIPO_CATEGORIAS}${queryParams ? `?${queryParams}` : ''}`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_TIPO_CATEGORIAS}/${id}`);
    return handleResponse(response);
  },

  create: async (tipoData) => {
    const response = await fetch(import.meta.env.VITE_API_TIPO_CATEGORIAS, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(tipoData)
    });
    return handleResponse(response);
  },

  update: async (id, tipoData) => {
    const response = await fetch(`${import.meta.env.VITE_API_TIPO_CATEGORIAS}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(tipoData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_TIPO_CATEGORIAS}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

// ===================
// LUGARES API
// ===================
export const lugaresAPI = {
  getAll: async () => {
    const url = import.meta.env.VITE_API_LUGARES;
    const response = await fetch(url);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_LUGARES}/${id}`);
    return handleResponse(response);
  },

  getDestacados: async () => {
    const response = await fetch(import.meta.env.VITE_API_LUGARES_DESTACADOS);
    return handleResponse(response);
  },

  getSponsors: async () => {
    const response = await fetch(import.meta.env.VITE_API_LUGARES_SPONSORS);
    return handleResponse(response);
  },

  create: async (lugarData) => {
    const response = await fetch(import.meta.env.VITE_API_LUGARES, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(lugarData)
    });
    return handleResponse(response);
  },

  update: async (id, lugarData) => {
    const response = await fetch(`${import.meta.env.VITE_API_LUGARES}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(lugarData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_LUGARES}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
};

export default {
  auth: authAPI,
  categorias: categoriasAPI,
  tipoCategorias: tipoCategoriaAPI,
  lugares: lugaresAPI
};
