
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  
 let menor=999;
  let mayor=0;
  for (let i=0; i<Family.length; i++)
  {
    if (menor>Family[i].age) menor= Family[i].age;
    if (mayor<Family[i].age) mayor= Family[i].age;

  }

  var res=	{
    oldest: 0,
    youngest: 0,
    age_difference: 0
  }

  res.oldest= mayor;
  res.youngest= menor;
  res.age_difference= mayor-menor;


  console.log(res);
  /*

Expected result:

```jsx
	{
    oldest: 67,
    youngest: 13,
    'age-difference': 54
  }
```*/