import db from "@/services/firebase-db";

export async function GET() {
    const dataList = [];
    // 從Firestore(db)取得集合內的全部文件
    const docList = await db.collection("vocab-result-list").get();
    docList.forEach((doc) => {

        const data = doc.data();
        // doc.data()將文件轉為JS物件
        data.id = doc.id;
        // 將物件加到 dataList 內
        dataList.push(data);
    });
    return Response.json({
        dataList
    });
}