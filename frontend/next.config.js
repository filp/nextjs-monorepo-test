/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['quotes'])

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
});
