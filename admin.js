export default {
    async fetch(request, env) {
      return await handleRequest(request).catch(
        (err) => new Response(err.stack, { status: 500 })
      )
    }
  }
  
  const pwd = 'hideip'; //跟isSetPwd匹配
  const url = 'https://www.google.com/search?q=';
  const plb = '在 HNet 上搜索，或者输入一个网址';
  // 是否需要密码
  const isSetPwd = false;
  
  const init = {
    initPwd: pwd,
    isSetPwd,
    url,
    plb
  }
  
  /**
   * Many more examples available at:
   *   https://developers.cloudflare.com/workers/examples
   * @param {Request} request
   * @returns {Promise<Response>}
   */
  async function handleRequest(request) {
    const {method} = request
    const { pathname } = new URL(request.url);
    console.log(new URL(request.url))
  
  if (method === "POST" && pathname.startsWith("/api")) {
      return new Response(JSON.stringify({...init}), {
        headers: { "Content-Type": "application/json" },
      });
    }
  }