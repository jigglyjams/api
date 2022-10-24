// All properties on a domain are optional
export const DOMAIN = {
  name: 'Juicetool',
  version: '1',
  chainId: 1,
};

// The named list of all type definitions
export const TYPES = {
  APIPayload: [
    { name: 'path', type: 'string' },
    { name: 'timestamp', type: 'uint256' },
    { name: 'payload', type: 'string' },
  ],
};
