import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    clearMocks: true,
    testMatch: ['**/**/*.spec.ts'],
};

export default config;