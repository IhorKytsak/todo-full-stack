import { useState } from 'react';
import { Button, TextField, InputAdornment, Tabs, Tab, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';
import { ITodoFilters } from '../../../types/todo.types';

interface TodosMenuProps {
  setFilter: React.Dispatch<React.SetStateAction<ITodoFilters>>;
}

const TodosSearchFilterMenu = ({ setFilter }: TodosMenuProps) => {
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');

  const handleTab = (_event: React.SyntheticEvent, value: string) => {
    setTab(value);

    if (value === 'all') setFilter({ search });
    if (value === 'public') setFilter({ search, isPrivate: false });
    if (value === 'private') setFilter({ search, isPrivate: true });
    if (value === 'completed') setFilter({ search, isCompleted: true });
  };

  const handleSearch = () => {
    setFilter((prev) => ({ ...prev, search }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: SPACES.s,
        my: SPACES.s
      }}
    >
      <Box
        sx={{
          borderColor: 'divider',
          fontSize: '10px',
          '& .MuiTab-root': {
            p: '4px 10px',
            fontSize: { sm: SIZES.m, md: SIZES.l },
            textTransform: 'none'
          },
          '& .MuiButtonBase-root': { minWidth: '30px' }
        }}
      >
        <Tabs value={tab} onChange={handleTab} aria-label="basic tabs example">
          <Tab label="All" value="all" />
          <Tab label="Private" value="private" />
          <Tab label="Public" value="public" />
          <Tab label="Completed" value="completed" />
        </Tabs>
      </Box>

      <TextField
        sx={{ maxWidth: '225px', '& .MuiInputBase-root': { pl: 0 } }}
        size="small"
        id="search"
        variant="outlined"
        placeholder="search"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{ pl: 0 }} position="start">
              <Button onClick={handleSearch} sx={{ minWidth: '30px', p: '6px 10px' }}>
                <SearchIcon />
              </Button>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default TodosSearchFilterMenu;
