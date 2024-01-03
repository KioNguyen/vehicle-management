import type { CodegenConfig } from '@graphql-codegen/cli';

const { NEXT_PUBLIC_GRAPHQL_URL } = process.env;

const config: CodegenConfig = {
  overwrite: true,
  schema: NEXT_PUBLIC_GRAPHQL_URL,
  documents: ['src/**/*.{gql,graphql}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/api/graphql/generated/schema.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
  hooks: { afterOneFileWrite: ['prettier --write'] },
};

export default config;
