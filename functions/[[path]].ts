// 强制让 Pages 启用 Worker 运行时
export function onRequest(context) {
  return context.next();
}
