import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // 1. 검사 제외 대상
  {
    ignores: ['node_modules/**', 'dist/**', '.husky/**'],
  },
  // 2. 기본 추천 규칙 적용
  ...tseslint.configs.recommended,
  // 3. Prettier 충돌 방지 설정
  prettierConfig,
  // 4. 프로젝트 커스텀 규칙
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
);