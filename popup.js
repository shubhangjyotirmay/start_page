db.collection('cafes').where("city","==","manchester").orderBy("name").get().then((snapshot)=>{
     snapshot.docs.forEach(doc=>{
        renderCafe(doc);
     });
 });