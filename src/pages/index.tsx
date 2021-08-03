import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import lightBlue from '@material-ui/core/colors/lightBlue';
import NavgiationCard from '@/components/landing/NavgiationCard';
import Home from '@/pages/home';
import itemData from '../database/database.json';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 320,
    padding: theme.spacing(4),
    position: 'relative',
  },
  gridItemOdd: {
    backgroundColor: lightBlue[100],
  },
  gridItemEven: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  highlightPaper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(0, 'auto'),
    maxWidth: 80,
    padding: theme.spacing(1, 2),
  },
  imageList: {
    height: '100%',
    width: 360,
  },
  imageListBackground: {
    backgroundColor: theme.palette.common.black,
  },
  imageListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  logo: {
    left: '50%',
    position: 'absolute',
    top: theme.spacing(2),
    transform: 'translate(-50%, 0)',
    width: 219,
  },
  packageCardContentDivider: {
    margin: theme.spacing(0, 'auto', 2),
    maxWidth: 120,
  },
  packageGridContainer: {
    height: 420,
  },
  packageGridItem: {
    height: '100%',
  },
  root: {},
  section: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  sectionPrimaryBackground: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  sectionVerticalPadding: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  toolbar: {
    color: theme.palette.common.white,
    justifyContent: 'flex-end',
  },
  toolbarLink: {
    color: theme.palette.common.white,
    justifyContent: 'flex-end',
  },
  topicHeader: {
    justifyContent: 'space-between',
    alignItems: 'bottom',
  },
  searchbar: {
    marginTop: theme.spacing(3),
  },
}));

const Page = () => {
  const classes = useStyles();

  const [lists, setLists] = React.useState(itemData);

  const [searchValue, setSearchValue] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const onChangeSearchBar = (newValue) => {
    setSearchValue(newValue);
    if (newValue == '') {
      setIsSearching(false);
      setLists([]);
    } else {
      setIsSearching(true);
      const filterList = itemData.filter((itemData) =>
        itemData.keywords.includes(newValue),
      );
      setLists(filterList);
    }
  };

  const onCancelSearch = () => {
    setIsSearching(false);
    setLists([]);
  };

  React.useEffect(() => {
    setLists([]);
  }, []);

  return (
    <React.Fragment>
      <Container className={classes.searchbar}>
        <SearchBar
          placeholder="Search your destination"
          value={searchValue}
          onChange={(newValue) => onChangeSearchBar(newValue)}
          onRequestSearch={() => onChangeSearchBar(searchValue)}
          onCancelSearch={() => onCancelSearch()}
        />
      </Container>

      {!isSearching ? (
        <Home></Home>
      ) : (
        <Container disableGutters className={classes.imageListContainer}>
          {lists.map((item, index) => (
            <NavgiationCard
              key={item.post_name}
              src={item.image}
              title={item.post_name}
              distance={item.distance}
              period={item.period}
              difficult={item.difficult}
              postLink={item.post_link}
            />
          ))}
        </Container>
      )}
    </React.Fragment>
  );
};

export default Page;
