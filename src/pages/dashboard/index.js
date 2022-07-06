import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { Chart } from '@common/Chart';

// const PRODUCT_LIMIT = 10;
// const PRODUCT_OFFSET = 10;

export default function Dashboard() {
  const products = useFetch(endPoints.products.allProducts);
  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  // console.log('info', categoryNames, categoryCount);
  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#2a71d0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
