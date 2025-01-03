import React from 'react';
import './Recipes.css';

function Recipes() {
  const recipes = [
    {
      id: 1,
      name: '红烧肉',
      description: '经典家常菜，香糯可口',
      ingredients: ['五花肉', '生抽', '老抽', '料酒', '姜片'],
      steps: ['将肉切块', '冷水下锅焯水', '放入调料炖煮', '大火收汁']
    },
    {
      id: 2,
      name: '麻婆豆腐',
      description: '川菜代表，麻辣鲜香',
      ingredients: ['豆腐', '肉末', '豆瓣酱', '花椒', '葱花'],
      steps: ['豆腐切块', '炒香肉末', '加入豆瓣酱', '放入豆腐翻炒']
    },
    {
      id: 3,
      name: '番茄炒蛋',
      description: '家常经典搭配，酸甜可口',
      ingredients: ['西红柿', '鸡蛋', '葱花', '盐', '糖'],
      steps: ['打散鸡蛋炒熟', '炒制番茄', '加入调味料', '最后合炒均匀']
    },
    {
      id: 4,
      name: '糖醋里脊',
      description: '酸甜可口，外酥里嫩',
      ingredients: ['里脊肉', '番茄酱', '白醋', '淀粉', '糖'],
      steps: ['肉切条', '裹粉炸制', '调制酱汁', '淋上酱汁']
    },
    {
      id: 5,
      name: '回锅肉',
      description: '川菜经典，香辣可口',
      ingredients: ['五花肉', '青蒜苗', '豆瓣酱', '花椒', '蒜片', '生抽'],
      steps: ['肉切片焯水', '爆香豆瓣酱', '加入肉片翻炒', '放入蒜苗翻炒', '调味即可']
    }
  ];

  return (
    <div className="recipes-section">
      <h2>美味菜谱</h2>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p className="description">{recipe.description}</p>
            <div className="recipe-details">
              <div className="ingredients">
                <h4>食材</h4>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="steps">
                <h4>步骤</h4>
                <ol>
                  {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes; 