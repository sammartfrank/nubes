export const CHUNK_LOADING_ERROR = 'ChunkLoadError';
export const CSS_LOADING_ERROR = 'CSS_CHUNK_LOAD_FAILED';
export const NOT_AUTHORIZED_ERROR = 'NOT_AUTHORIZED_ERROR';
export const DATA_COULD_NOT_BE_LOADED = 'DATA_COULD_NOT_BE_LOADED';

export const ERROR_MAP = {
  // webpack errors: derive by error name or code
  [CHUNK_LOADING_ERROR]: {
    header: 'Network Error',
    message:
      'Unable to load some parts of the application, please make sure you are connected to the correct network [ChunkLoadError].',
    home: true,
  },
  [CSS_LOADING_ERROR]: {
    header: 'Network Error',
    message:
      'Unable to load some parts of the application, please make sure you are connected to the correct network [CSS_CHUNK_LOAD_FAILED].',
    home: true,
  },
  // client errors: derive by error message
  [NOT_AUTHORIZED_ERROR]: {
    header: 'Forbidden',
    message: 'You are not authorized to access this page.',
    home: true,
  },
  [DATA_COULD_NOT_BE_LOADED]: {
    header: 'Error loading data',
    message: 'Data could not be loaded, please try again.',
    home: true,
  },
  // server errors: derive by status code
  403: {
    status: 403,
    header: 'Forbidden',
    message: "You're not allowed to access this page.",
    home: false,
  },
  404: {
    status: 404,
    header: "Oops! You're lost",
    message: 'The page you are looking for was not found.',
    home: true,
  },
  500: {
    status: 500,
    header: 'Houston, we have a problem!',
    message: 'The service is temporarily unavailable. Please try again later.',
    home: true,
  },
  DEFAULT: {
    header: 'Something went wrong...',
    message: 'An unexpected error occurred.',
    home: true,
  },
};
