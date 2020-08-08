import React from 'react'
import PropTypes from 'prop-types'

import { getData } from '../utils'
import NimbleEmoji from './emoji/nimble-emoji'
import { search } from '../svgs/index'
import SkinsEmoji from './skins-emoji'
import SkinsDot from './skins-dot'

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props)

    this.data = props.data
    this.state = { emoji: null }
  }

  render() {
    var { emoji } = this.state,
      {
        emojiProps,
        skinsProps,
        showSkinTones,
        title,
        emoji: idleEmoji,
        i18n,
        showPreview,
      } = this.props

    if (emoji && showPreview) {
      var emojiData = getData(emoji, null, null, this.data),
        { emoticons = [] } = emojiData,
        knownEmoticons = [],
        listedEmoticons = []

      emoticons.forEach((emoticon) => {
        if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
          return
        }

        knownEmoticons.push(emoticon.toLowerCase())
        listedEmoticons.push(emoticon)
      })

      return (
        <div className="emoji-mart-preview">
        <div className="emoji-label" aria-hidden="true">
        <div className="emoji-label-text">
          {('Emoji')}
        </div>
        </div>

        <div className="gif-label" aria-hidden="true">
          {('GIF')}
        </div>

        <div className="add-label" aria-hidden="true">
          {search.add()}
        </div>

        <div className="emoji-mart-preview-data" aria-hidden="true">
          {/* <span className="emoji-mart-title-label">{title}</span> */}
        </div> 

          <div className="emoji-mart-preview-data" aria-hidden="true">
            {/* <div className="emoji-mart-preview-name">{emoji.name}</div>
            <div className="emoji-mart-preview-shortnames">
              {emojiData.short_names.map((short_name) => (
                <span key={short_name} className="emoji-mart-preview-shortname">
                  :{short_name}:
                </span>
              ))}
            </div>
            <div className="emoji-mart-preview-emoticons">
              {listedEmoticons.map((emoticon) => (
                <span key={emoticon} className="emoji-mart-preview-emoticon">
                  {emoticon}
                </span>
              ))}
            </div> */}
          </div>

          {showSkinTones && (
            <div
              className={`emoji-mart-preview-skins${
                skinsProps.skinEmoji ? ' custom' : ''
              }`}
            >
              {skinsProps.skinEmoji ? (
                <SkinsEmoji
                  skin={skinsProps.skin}
                  emojiProps={emojiProps}
                  data={this.data}
                  skinEmoji={skinsProps.skinEmoji}
                  i18n={i18n}
                  onChange={skinsProps.onChange}
                />
              ) : (
                <SkinsDot
                  skin={skinsProps.skin}
                  i18n={i18n}
                  onChange={skinsProps.onChange}
                />
              )}
            </div>
          )}
          
        </div>
      )
    } else {
      return (
        <div className="emoji-mart-preview">
        <div className="emoji-label" aria-hidden="true">
        <div className="emoji-label-text">
          {('Emoji')}
        </div>
        </div>

          <div className="gif-label" aria-hidden="true">
            {('GIF')}
          </div>

          <div className="add-label" aria-hidden="true">
            {search.add()}
          </div>

          <div className="emoji-mart-preview-data" aria-hidden="true">
            {/* <span className="emoji-mart-title-label">{title}</span> */}
          </div> 

          {showSkinTones && (
            <div
              className={`emoji-mart-preview-skins${
                skinsProps.skinEmoji ? ' custom' : ''
              }`}
            >
              {skinsProps.skinEmoji ? (
                <SkinsEmoji
                  skin={skinsProps.skin}
                  emojiProps={emojiProps}
                  data={this.data}
                  skinEmoji={skinsProps.skinEmoji}
                  i18n={i18n}
                  onChange={skinsProps.onChange}
                />
              ) : (
                <SkinsDot
                  skin={skinsProps.skin}
                  i18n={i18n}
                  onChange={skinsProps.onChange}
                />
              )}
            </div>
          )}
        </div>
      )
    }
  }
}

Preview.propTypes /* remove-proptypes */ = {
  showSkinTones: PropTypes.bool,
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  emojiProps: PropTypes.object.isRequired,
  skinsProps: PropTypes.object.isRequired,
}

Preview.defaultProps = {
  showSkinTones: true,
  onChange: () => {},
}
