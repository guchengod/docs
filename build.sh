#!/bin/bash

# 使用固定版本的 yarn
npm install -g yarn@1.22.19

# 安装依赖
yarn install --frozen-lockfile

# 构建项目
yarn build
