import { get } from 'network'
export async function discoverSign(pages,num=7) {
    return await get('goods/comment',{
        params: {
            pages,
            num
        }
    });
}