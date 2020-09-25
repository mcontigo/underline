import glob from 'glob';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

const input = glob.sync(path.resolve(process.cwd(), 'src/*.js'));

export default [
  {
    input,
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'auto',
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        inputSourceMap: false,
        presets: [["@babel/env", {"modules": false}]],
        plugins: [
          ['@babel/plugin-proposal-export-default-from'],
          ['@babel/plugin-transform-runtime', {useESModules: true}],
        ],
        exclude: ['node_modules/**'],
      }),
      resolve(),
      commonjs(),
      terser(),
      sizeSnapshot(),
    ]
  }
];
