#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const output = readFileSync(fileURLToPath(new URL('output.txt', import.meta.url)), 'utf8');

console.log(output)
