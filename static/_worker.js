// 定义 Cloudflare Worker 以处理特殊路由和请求
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 获取原始响应
  const response = await fetch(request)
  
  // 克隆响应以便我们可以修改它
  const newResponse = new Response(response.body, response)
  
  // 添加安全头信息
  newResponse.headers.set('X-Content-Type-Options', 'nosniff')
  newResponse.headers.set('X-Frame-Options', 'DENY')
  newResponse.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')
  
  return newResponse
}
