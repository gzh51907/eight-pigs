import { get } from 'network'
export async function discoverSign() {
    return await get('goods/comment',{
        params: {
            pages: 0,
            num: 7,
        }
    });
}