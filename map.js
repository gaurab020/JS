const MapExample = ()=>{
    const map = new Map();
    map.set("name", "Gaurab");
    console.log(map.get("name"));

    const a = [1,2,3,4,5];
    const aa= [...a]
    console.log(aa)
}
MapExample();