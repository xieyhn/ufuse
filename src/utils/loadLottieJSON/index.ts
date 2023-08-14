function loadLottieJSON(records: Record<string, unknown>) {
  const files = Object.keys(records)
  const modules = files.map(key => records[key])

  const jsonIndex = files.findIndex(key => key.endsWith('.json'))
  // deep copy
  const json = JSON.parse(JSON.stringify(modules[jsonIndex])) as any

  json.assets?.forEach((asset: any) => {
    const u = asset.u
    // 移除 assets 基础路径
    Reflect.deleteProperty(asset, 'u')
    // 修改资源路径变为绝对路径
    const idx = files.findIndex(key => key.endsWith(`${u}${asset.p}`))
    asset.p = (modules[idx] as any).default
  })

  return json
}

export default loadLottieJSON
