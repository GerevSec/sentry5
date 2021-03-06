import {Fragment} from 'react';
import styled from '@emotion/styled';

import theme, {aliases} from 'app/utils/theme';

export default {
  title: 'Core/Color',
};

const DESCRIPTIONS = {
  textColor: 'Primary text color',
  subText: 'Text that should not have as much emphasis',
  bodyBackground: 'Background for the main content area of a page?',
  background: 'Primary background color',
  backgroundSecondary:
    'Secondary background color used as a slight contrast against primary background',
  headerBackground: 'Background for the header of a page',
  border: 'Primary border color',
  success: 'A color that denotes a "success", or something good',
  error: 'A color that denotes an error, or something that is wrong',
  disabled:
    'A color that indicates something is disabled where user can not interact or use it in the usual manner (implies that there is an "enabled" state)',
  active: 'Indicates that something is "active" or "selected"',
  linkColor: 'Link color indicates that something is clickable',
  secondaryButton: '...',
  sidebarGradient: 'Gradient for sidebar',
  formPlaceholder: 'Form placeholder text color',
  formText: 'Default form text color',
  rowBackground: ' ',
  chartLineColor:
    'Color of lines that flow across the background of the chart to indicate axes levels',
  chartLabel: 'Color for chart label text',
};

export const Default = () => {
  const colorsToDisplay = Object.entries(theme).filter(([_name, val]) => {
    return typeof val === 'string' && val.match(/^\#[0-9a-fA-F]{6}$/);
  });

  return (
    <Fragment>
      <h2>Aliases</h2>

      <p>
        These are the color aliases you should be using (if possible) instead of using the
        direct colors.
      </p>

      <Aliases>
        {Object.keys(aliases).map(alias => (
          <Fragment key={alias}>
            <Swatch color={aliases[alias]}>{alias}</Swatch>
            <div>{DESCRIPTIONS[alias] || 'No description available'}</div>
          </Fragment>
        ))}
      </Aliases>

      <h2>All Colors</h2>
      <Swatches>
        {colorsToDisplay.map(([name, color]) => (
          <Swatch key={name} color={color}>
            {name}
          </Swatch>
        ))}
      </Swatches>
    </Fragment>
  );
};
Default.storyName = 'Color';

const Swatches = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-gap: 16px;
`;

const Swatch = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.color};
  color: ${p =>
    /[0-8]{1}/.test(p.color) ? p.theme.backgroundSecondary : p.theme.gray500};
  font-size: ${p => p.theme.fontSizeSmall};
  height: 80px;
  text-align: center;
  word-break: break-all;
  line-height: 1.4em;
`;

const Aliases = styled('div')`
  display: grid;
  align-items: center;
  grid-template-columns: max-content auto;
  grid-gap: 16px;
  margin-bottom: 30px;
  ${Swatch} {
    height: auto;
    padding: 8px;
  }
`;
