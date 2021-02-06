import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all',... new Set(items.map((item)=> item.category))];
function App() {
  const [menuitems, setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);
  const filterItems = (category) => {
    if(category=="all")
      setMenuItems(items);
    else
     setMenuItems(items.filter((item) => item.category=== category))
  }

  return <main>
    <section className="menu-section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuitems} />
    </section>
  </main>
}

export default App;
