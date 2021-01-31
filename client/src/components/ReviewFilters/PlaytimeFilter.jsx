import React from 'react';
import $ from 'jquery';

import { SteamLabsImage, SliderDiv, SliderInputLeft, SliderInputRight, Slider, Track, Range, ThumbLeft, ThumbRight, PlayTimeFilterMenu, DropDownText } from '../../styled';

class PlaytimeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steamLabsLogo: this.props.steamLabsLogo,
      minimum: null,
      maximum: null,
    };
    this.setLeftValue = this.setLeftValue.bind(this);
    this.updateMinimum = this.updateMinimum.bind(this);
    this.updateMaximum = this.updateMaximum.bind(this);
    this.updateViaFormSelection = this.updateViaFormSelection.bind(this);
  }

  componentDidMount() {
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');

    this.setLeftValue();
    this.setRightValue();

    inputLeft.addEventListener('input', this.setLeftValue);
    inputRight.addEventListener('input', this.setRightValue);
  }

  setLeftValue() {
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');

    const thumbLeft = document.getElementById('thumbLeft');
    const range = document.getElementById('range');

    const _this = inputLeft;
    const min = parseInt(_this.min, 10);
    const max = parseInt(_this.max, 10);

    _this.value = Math.min(parseInt(_this.value, 10), parseInt(inputRight.value, 10) - 1);

    const percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + '%';
    range.style.left = percent + '%';
  }

  setRightValue() {
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');

    const thumbRight = document.getElementById('thumbRight');
    const range = document.getElementById('range');

    const _this = inputRight;
    const min = parseInt(_this.min, 10);
    const max = parseInt(_this.max, 10);

    _this.value = Math.max(parseInt(_this.value, 10), parseInt(inputLeft.value, 10) + 1);

    const percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + '%';
    range.style.right = (100 - percent) + '%';
  }

  updateViaFormSelection(e) {
    let min;
    let max;

    if (e.target.value === 'none') {
      min = null;
      max = null;
    } else if (e.target.value === 'overOneHour') {
      min = 1;
      max = null;
    } else if (e.target.value === 'overTenHours') {
      min = 10;
      max = null;
    }
    this.setState({
      minimum: min,
      maximum: max,
    });
  }

  updateMinimum(e) {
    let min;
    e.target.value === 0 ? min = null : min = e.target.value;
    this.setState({
      minimum: min,
    });
  }

  updateMaximum(e) {
    let max;
    e.target.value === 100 ? max = null : max = e.target.value;
    this.setState({
      maximum: max,
    });
  }

  render() {
    const { steamLabsLogo, minimum, maximum } = this.state;
    return (
      <PlayTimeFilterMenu>
        <DropDownText>Playtime</DropDownText>
        <div className="playtime_menu_flyout">
          <SteamLabsImage src={steamLabsLogo} />
          <span>Brought to you by Steam Labs</span>
          <div>Filter reviews by the user&apos;s playtime when the review was written:</div>
          <form>
            <input type="radio" value="none" name="playtime" onClick={this.updateViaFormSelection} />
            <span>No Minimum</span>
            <br></br>
            <input type="radio" value="overOneHour" name="playtime" onClick={this.updateViaFormSelection} />
            <span>Over 1 hour</span>
            <br></br>
            <input type="radio" value="overTenHours" name="playtime" onClick={this.updateViaFormSelection} />
            <span>Over 10 hours</span>
          </form>
          <div className="current_selection_message">
            <span className="minimum_value">{minimum === null ? 'No minimum' : `${minimum} hour(s)`}</span>
            <span>to</span>
            <span className="maximum_value">{maximum === null ? 'No maximum' : `${maximum} hour(s)`}</span>
          </div>
          <SliderDiv>
            <SliderInputLeft
              type="range"
              id="input-left"
              min="0"
              max="100"
              value={minimum === null ? 0 : minimum}
              onChange={(e) => { console.log(e.target.value); }}
              onInput={(e) => { this.updateMinimum(e); }} />
            <SliderInputRight
              type="range"
              id="input-right"
              min="0"
              max="100"
              value={maximum === null ? 100 : maximum}
              onChange={(e) => { console.log(e.target.value); }}
              onInput={(e) => { this.updateMaximum(e); }} />
            <Slider>
              <Track></Track>
              <Range id="range"></Range>
              <ThumbLeft id="thumbLeft"></ThumbLeft>
              <ThumbRight id="thumbRight"></ThumbRight>
            </Slider>
          </SliderDiv>
        </div>
      </PlayTimeFilterMenu>
    );
  }
}

export default PlaytimeFilter;
