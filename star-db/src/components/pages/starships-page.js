/**
 * withRouter()
 *
 * withRouter это компонент высшего порядка, он передает компоненту обекты react router:
 *
 * const MyComponent = ({ match, location, history }) => {
 *   return (
 *     <Button
 *       onClick={() => history.push('/new/path')} >
 *       Click Me
 *     </Button>
 *   );
 * }
 *
 */

import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={( itemId ) => {
        history.push(`/starships/${ itemId }`)
      }} />
  );
};

export default withRouter(StarshipsPage);
