#!/bin/bash

# 显示当前环境信息
echo "Node version: $(node -v)"
echo "Yarn version: $(yarn -v)"

# 安装依赖
yarn install --frozen-lockfile --network-timeout 100000

# 构建项目
yarn build
