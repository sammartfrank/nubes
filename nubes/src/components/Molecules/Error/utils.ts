import { ERROR_MAP } from './config';

interface ErrorState {
  status?: number;
  header: string;
  message: string;
  home: boolean;
}
const CHUNK_LOADING_ERROR: keyof typeof ERROR_MAP = 'ChunkLoadError';
const CSS_LOADING_ERROR: keyof typeof ERROR_MAP = 'CSS_CHUNK_LOAD_FAILED';
const NOT_AUTHORIZED_ERROR: keyof typeof ERROR_MAP = 'NOT_AUTHORIZED_ERROR';

export const deriveErrorState = (error: unknown): ErrorState => {
  if (isChunkLoadError(error)) return ERROR_MAP[CHUNK_LOADING_ERROR];
  if (isCssLoadError(error)) return ERROR_MAP[CSS_LOADING_ERROR];
  if (isClientError(error)) return ERROR_MAP[NOT_AUTHORIZED_ERROR];
  //   if (isRouteErrorResponse(error)) return ERROR_MAP[error.status];

  return ERROR_MAP.DEFAULT;
};

interface ChunkLoaDError extends Error {
  name: 'ChunkLoadError';
}

const isChunkLoadError = (error: unknown): error is ChunkLoaDError => {
  return error instanceof Error && error.name === 'ChunkLoadError';
};

interface CssLoadError extends Error {
  code: string;
}

const isCssLoadError = (error: unknown): error is CssLoadError => {
  return (
    error instanceof Error &&
    (error as CssLoadError).code === 'CSS_LOADING_ERROR'
  );
};

export class ClientError extends Error {
  constructor(message: keyof typeof ERROR_MAP) {
    super(message as string);
    this.name = 'ClientError';
  }
}

const isClientError = (error: unknown): error is ClientError => {
  return error instanceof Error && error.name === 'ClientError';
};
