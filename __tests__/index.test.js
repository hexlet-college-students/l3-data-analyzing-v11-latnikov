// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/languages.js __fixtures__/languages1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/languages.js __fixtures__/languages2.csv',
  // @ts-ignore
  options,
);

const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Count: 17');
  assert.strictEqual(rows2[0], 'Count: 12');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Continents: Европа, Америка, Африка, Азия');
  assert.strictEqual(rows2[1], 'Continents: Европа, Азия, Африка');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Amount of languages with 1 country: 4');
  assert.strictEqual(rows2[2], 'Amount of languages with 1 country: 9');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'The most popular language: Английский');
  assert.strictEqual(rows2[3], 'The most popular language: Бенгальский');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Complexity: Средняя: 8, Низкая: 3, Высокая: 6');
  assert.strictEqual(rows2[4], 'Complexity: Низкая: 1, Средняя: 6, Высокая: 5');
});
