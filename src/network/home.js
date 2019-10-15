import { get } from 'network'
// 请求轮播图和评价的数据
export async function homeTourMan() {
    return await get('goods/guide', {
        params: {
            pages: 0,
            num: 6,
        }
    });
}

export async function homeView(guideId) {
    return await get('goods/sight',{
        params:{
            guideId
        }
    });
}


