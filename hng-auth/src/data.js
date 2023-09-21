// data.js

const imageNames = [
  {
    id: "1",
    name: "1.jpg",
    tags: ["Animal"],
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwYW5kJTIwd2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    name: "2.jpg",
    tags: ["Fruit"],
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "3",
    name: "3.jpg",
    tags: ["Animal"],
    image:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0JTIwYW5kJTIwd2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "4",
    name: "4.jpg",
    tags: ["Animal"],
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMGFuZCUyMHdpbGRsaWZlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60//",
  },

  {
    id: "5",
    name: "4.jpg",
    tags: ["Fruit"],
    image:
      "https://images.unsplash.com/photo-1471943038886-87c772c31367?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: "6",
    name: "4.jpg",
    tags: ["Health & Wellness"],
    image:
      "https://images.unsplash.com/photo-1693129439612-1af473c089db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "7",
    name: "4.jpg",
    tags: ["Health & Wellness"],
    image:
      "https://plus.unsplash.com/premium_photo-1666736569008-b250092131ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "8",
    name: "4.jpg",
    tags: ["Car"],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "9",
    name: "4.jpg",
    tags: ["Sport"],
    image:
      "https://plus.unsplash.com/premium_photo-1685366445883-709973744248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "10",
    name: "4.jpg",
    tags: ["Car"],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11",
    name: "4.jpg",
    tags: ["Fashion"],
    image:
      "https://plus.unsplash.com/premium_photo-1692340972681-cbafc43a248f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "12",
    name: "4.jpg",
    tags: ["Travel"],
    image:
      "https://images.unsplash.com/photo-1694854032451-01c0617fe5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "13",
    name: "4.jpg",
    tags: ["Fashion"],
    image:
      "https://images.unsplash.com/photo-1694631031738-0e857f3e872a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "14",
    name: "4.jpg",
    tags: ["Animal"],
    image:
      "https://images.unsplash.com/photo-1694088957234-2e3932f7c786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "15",
    name: "4.jpg",
    tags: ["Fashion"],
    image:
      "https://images.unsplash.com/photo-1694439368032-230a1bad9617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "16",
    name: "4.jpg",
    tags: ["Travel"],
    image:
      "https://images.unsplash.com/photo-1622401794058-52fe26487175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "17",
    name: "4.jpg",
    tags: ["Sport"],
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "18",
    name: "4.jpg",
    tags: ["Car"],
    image:
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "19",
    name: "4.jpg",
    tags: ["Health & Fitness"],
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aCUyMCUyNiUyMGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "20",
    name: "4.jpg",
    tags: ["Sport"],
    image:
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export default imageNames;
