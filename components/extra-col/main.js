import SearchBox from '../search-box';
import ExtraContainer from '../extra-container';
import FollowPerson from '../follow-person';
import Trends from '../trends';

function MainExtra() {

  return (
    <div>
      <SearchBox />
      <ExtraContainer title="Trends for you" options>
       <Trends/>
      </ExtraContainer>

      <ExtraContainer title="Who to follow">
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
      </ExtraContainer>
    </div>
  );
}

export default MainExtra;
