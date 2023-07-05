import { ref } from "vue";
// 装饰器函数，将普通对象数组添加新的index：key，代表图片的固定index属性
export function decorationClass(ArrayList: any[]) {
  const middleArray: any = [];
  interface objInterface {
    image?: string;
    index?: number;
  }
  ArrayList.forEach((item, index) => {
    const obj: objInterface = { ...item };
    obj["index"] = index;
    middleArray.push(obj);
  });
  return ref(middleArray);
}

export function createadaptAddressdot(item: any[], width: number): any[] {
  const arrayList: any[] = [];
  const start = -item.length + 1;
  for (let y = 0; y >= start; y--) {
    const middleArray = [];
    for (let i = 0; i < item.length; i++) {
      middleArray.push((y + i) * width);
    }
    arrayList.push(middleArray);
  }
  // console.log(arrayList);
  return arrayList;
}
export function createpositionAddress(item: any[],width:number): any[] {
  const arrayList: any[] = [];
  item.forEach((item, index) => {
    arrayList.push(index * width);
  });
  return arrayList;
}
export function createdotList(item: any[]): any[] {
  const arrayList: any[] = [];
  item.forEach((item, index) => {
    if (index == 0) {
      arrayList.push(1);
    } else {
      arrayList.push(0);
    }
  });
  return arrayList;
}
