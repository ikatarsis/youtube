import { Stack } from '@mui/material'
import { categories } from '../utils/constants.jsx'


const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setselectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#FC1503',
            color: '#fff',
            transition: 'background 0.4s ease-in'
          }}
          key={category.name}
        >
          <span style={{
            color: category.name === selectedCategory ? '#fff' : '#FC1503',
            marginRight: '15px',
            transition: 'color 0.3s ease-in'
          }}>
            {category.icon}
          </span>
          <span style={{
            opacity: category.name === selectedCategory ? '1' : '0.8'
          }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
