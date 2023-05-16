// src/types/Movie.ts

// 声明一个接口Movie,定义电影对象中所有属性
interface Movie{
  id:number,
  category_id:number,
  cover:string,
  description:string,
  duration:number,
  score:string,
  showingon:string,
  star_actor:string,
  title:string,
  type:string
}
export default Movie