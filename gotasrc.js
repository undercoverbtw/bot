var version, showSideMenu, hideSideMenu;
(function() {
  var aa = [
    'gota.io',
    '',
    ':',
    'split',
    '/',
    '://',
    'href',
    'location',
    ',',
    'length',
    '.',
    'error',
    '3.6.4',
    '#',
    'display',
    'css',
    'none',
    'slideDown',
    'block',
    'slideUp',
    'each',
    'children',
    '#main-right',
    'PIXI',
    'Container',
    'EMPTY',
    'Texture',
    'Sprite',
    'addChild',
    'PI',
    'https://discord.com/channels/166703751053312000/630428963889741854',
    'GoogleAuthProvider',
    'auth',
    'https://accounts.gota.io',
    'xmas',
    'enabled',
    'endDate',
    'AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM',
    'accounts.gota.io',
    'https://gota-io.firebaseio.com',
    'gota-io',
    'gota-io.appspot.com',
    '570450309042',
    '1:570450309042:web:380ab6c94d44de2f',
    'initializeApp',
    'All',
    'Party',
    'ALL',
    'AUTO',
    'NONE',
    'ULTRA',
    'DEFAULT',
    '360px',
    '250px',
    'stringify',
    'parse',
    'assign',
    'rgb(255, 255, 255)',
    'rgba(22, 22, 22, 0.8)',
    'rgba(255, 255, 255, .2)',
    '#2A2A2A',
    '#404040',
    '#363636',
    '#444444',
    '#121212',
    '#ff0000',
    '#ffaaaa',
    '#ffff00',
    '#00ffff',
    '#00ff00',
    'canvas',
    'getElementById',
    'minimap-canvas',
    '2d',
    'getContext',
    '#main',
    '#party-panel',
    '.hud-panel',
    '#score-panel',
    '#main-scrimmage',
    '#context-menu',
    '#chat-input',
    '#leaderboard-header',
    '#scrimmage-custom',
    'mouseFrozenDiv',
    '#score-mouse',
    'playerScore',
    '#playerScore',
    'playerCells',
    '#playerCells',
    'playerFps',
    '#playerFps',
    'resetInfo',
    '#extra-reset-timer',
    'resetTime',
    '#resetTime',
    'respawnInfo',
    '#extra-respawn-cooldown',
    'respawnCooldown',
    '#respawnCooldown',
    'spectatorCount',
    '#spectatorCount',
    'playerCellCount',
    'minimapCoords',
    '#minimap-coordinates',
    'partyPanel',
    'friendOnlineCount',
    '#social-online-friends-count',
    'onmousemove',
    'mouseRawX',
    'clientX',
    'mouseRawY',
    'clientY',
    'onkeydown',
    'which',
    'keyCode',
    'charCode',
    'preventDefault',
    ':focus',
    'is',
    'input',
    '#popup-profile',
    '#popup-account-username',
    'handleKey',
    'onkeyup',
    'kEjectMass',
    'sendEjectMass',
    'sendPacket',
    'onmousedown',
    'button',
    'onmouseup',
    'onblur',
    'cDisablePersistEjectMass',
    'wheel',
    'id',
    'target',
    'wheelDelta',
    'originalEvent',
    'deltaY',
    'mouseZoom',
    'on',
    'contextmenu',
    'addEventListener',
    '&',
    'join',
    'slice',
    'toLowerCase',
    'toUpperCase',
    'name',
    'region',
    'value',
    'val',
    'version',
    'Woah! Version ',
    ' is now available. Press Ctrl+R to update!',
    'selfMsg',
    'motd',
    'listRefresh',
    'titles',
    '/game',
    'ref',
    'database',
    'POST',
    'json',
    '/api/v1/utilities/servers',
    'servers',
    'players',
    'bots',
    'playersMax',
    '*',
    'address',
    'gamemode',
    'ssl',
    'order',
    'push',
    'sort',
    'ajax',
    'eu',
    'Vendetta',
    'unload',
    'init',
    'sRenderType',
    'CANVAS',
    'cDisableAA',
    'autoDetectRenderer',
    'resize',
    'now',
    'Welcome to Gota.io!',
    'width',
    'innerWidth',
    'resolution',
    'height',
    'innerHeight',
    'renderer',
    'x',
    'position',
    'stage',
    'y',
    'Graphics',
    'beginFill',
    'drawCircle',
    'endFill',
    'HIGH',
    'MSAA_QUALITY',
    'devicePixelRatio',
    'create',
    'RenderTexture',
    'Matrix',
    'render',
    'framebuffer',
    'blit',
    'destroy',
    'charAt',
    'u',
    'rAnimationDelay',
    'min',
    'scale',
    'cDisableAutoFoodHiding',
    'cHideFood',
    'visible',
    'foodObjects',
    'steps',
    'animate',
    'handleFood',
    'bucket',
    'handle',
    'myCells',
    'size',
    'centerX',
    'centerY',
    'centerSteps',
    'cDisableAutoZoom',
    'scale_base',
    'max',
    'pow',
    'centerX_',
    'centerY_',
    'pivot',
    'isConnected',
    'mouseFrozen',
    'sendMouse',
    'cHideMinimap',
    'cShowCoordinates',
    'update',
    'buffHolder',
    'html',
    'resetType',
    'serverData',
    'floor',
    'ceil',
    'NEVER',
    'handleUpdatedPlayers',
    'playerRegistry',
    'cShowBorder',
    'border',
    'removeChild',
    'parent',
    'rBorderSize',
    'toHexString',
    'uiGameBorderColor',
    'string2hex',
    'utils',
    'lineStyle',
    'left',
    'top',
    'drawRect',
    'uiForegroundColor',
    'X: ',
    'toFixed',
    ' Y: ',
    'clearRect',
    'font',
    '12px Calibri',
    'party',
    'state',
    'ALIVE',
    'playerId',
    'mmColor',
    'x_',
    'y_',
    '#fefefe',
    'socket',
    'currentServer',
    'currentServerName',
    'spectate',
    'scale_',
    'offsetX',
    'offsetY',
    'mouseX',
    'mouseY',
    'partyIds',
    'subPanelOverride',
    'score',
    'customGameMap',
    'accountListeners',
    'clearStats',
    'bind',
    'sendPing',
    'prototype',
    'stats',
    'An unnamed cell',
    'play',
    'No server selected!',
    '#name-box',
    '#playerServer',
    'ip',
    'setName',
    'connect',
    'send',
    'event',
    'Game',
    'webMenu',
    'Play',
    'spec',
    'sendSpectate',
    'Spectate',
    'nextUrl',
    'disconnect',
    'Connecting to ',
    '...',
    'wss://',
    'ws://',
    'binaryType',
    'arraybuffer',
    'onopen',
    'onConnect',
    'onmessage',
    'onMessage',
    'onclose',
    'reset',
    'You have been disconnected from the server. Reason: ',
    'reason',
    'Unknown',
    'onerror',
    'Error connecting to server... Retrying every second.',
    'hide-captcha-badge',
    'add',
    'classList',
    'body',
    'close',
    'clearBuckets',
    'onDelete',
    'clear',
    'clearParty',
    'clearBuffs',
    'hasSentSubPanel',
    'autosplits',
    '#playerId',
    'kSplit',
    'sendKey',
    'kToggleSpec',
    'kDoubleSplit',
    'kTripleSplit',
    'kQuadSplit',
    'kHexaSplit',
    'kFreezeMouse',
    'kContextMenu',
    'readyState',
    'connectionStart',
    'sendOptions',
    'currentUser',
    'catch',
    'sendAuthToken',
    'then',
    'getIdToken',
    'td',
    'createElement',
    'span',
    'color',
    'style',
    '#DDDD00',
    'innerHTML',
    '[System] ',
    'appendChild',
    'SYSTEM',
    'selfMsgWithJoinCode',
    'pointerEvents',
    'all',
    'userSelect',
    'partyLeader',
    'partyIndex',
    'handleCustomGameLeave',
    'partyCode',
    'page',
    ' ',
    'pushState',
    'history',
    'isPartyLeader',
    'getServerMaxCells',
    'maxCells',
    'bonusMaxCells',
    'data',
    'getUint8',
    'offset',
    'handleUpdate',
    'handlePosition',
    'handleStats',
    'showSubPanel',
    'updateSubPanel',
    'handleInvite',
    'handlePartyInfo',
    'handlePartyData',
    'handlePartyJoinCode',
    'handleLeaderboard',
    'handleLeaderboardCustom',
    'handleRespawnCooldown',
    'handleMapData',
    'handleClearNodes',
    'handleUpdateBorder',
    'handleResetTime',
    'handleSpectators',
    'handleSystemMsg',
    'handlePing',
    'handleChat',
    'handleWhisper',
    'handleEditMessage',
    'handleShowScrimmageMenu',
    'handleQueueData',
    'handleQueueLeave',
    'handleMatchState',
    'handleScrimmageData',
    'handleCustomGameShow',
    'handleCustomGameUpdate',
    'handleShowCustomGameLobbies',
    'handleAddBuff',
    'handleRemoveBuff',
    'handleClearBuffs',
    'handleAuthenticated',
    'handleProfile',
    'getUint16',
    'remove',
    'type',
    'keys',
    'cAutoRespawn',
    'GOT_gota-io_336x280',
    'refresh',
    'cmd',
    'getPlayer',
    'cellColor',
    'setSkin',
    'setFlags',
    'flags',
    'nameColor',
    'parseEffect',
    'nameFont',
    'updatePlayer',
    'setType',
    'getInt16',
    'setX',
    'setY',
    'setSize',
    'skin',
    'rainbow',
    'buff',
    'onCreate',
    'updateX',
    'updateY',
    'size_',
    'sortCells',
    'getFloat32',
    'getFloat64',
    'updateCellCounter',
    'sendPartyJoin',
    '#scrimmage-btn-leave',
    'right',
    'bottom',
    'spectators',
    'updateSpectators',
    'leaderboard-canvas',
    'Leaderboard',
    'text',
    'getUint32',
    '16px Calibri',
    'fillStyle',
    'uiLeaderboardHighlightSelf',
    'uiLeaderboardHighlightParty',
    '. ',
    'fillText',
    'cColoredPing',
    'uiGameColorSuccess',
    '#playerPing',
    'uiGameColorWarning',
    'uiGameColorError',
    'ms',
    'rgb(',
    ')',
    'includes',
    'byteLength',
    'getBigInt64',
    'PARTY',
    'Admin',
    'ADMIN',
    ' - ',
    'msgid',
    'dataset',
    '[',
    '] ',
    'innerText',
    'className',
    'chat-name',
    'oncontextmenu',
    ': ',
    'chat-content',
    ' > ',
    'WHISPER',
    '.chat-table td[data-msgid=\'',
    '\'] .chat-content',
    'tr',
    'closest',
    '\']',
    'SUCCESS',
    'Invalid authentication token! Please logout and try again!',
    'FAILURE',
    'cAutoDecline',
    'sendInviteResponse',
    'popup-party-text',
    ' has invited you to a party.',
    '#popup-party',
    'isLeader',
    'cache',
    'team',
    'UNKNOWN',
    'checkLeader',
    'drawParty',
    'getInt32',
    '#popup-party-code-content input',
    'show',
    '#popup-party-code',
    'alive',
    'eatenFood',
    'eatenEject',
    'eatenVirus',
    'eatenPlayer',
    'gainFood',
    'gainEject',
    'gainVirus',
    'gainPlayer',
    '#main-stats',
    'empty',
    '<span>Name: ',
    ' (',
    ')</span><br>',
    'append',
    '<span>Alive: ',
    '</span><br>',
    '<span>Food eaten: ',
    '<span>Ejected mass eaten: ',
    '<span>Viruses eaten: ',
    '<span>Player cells eaten: ',
    'uid',
    'onAddBuff',
    'onRemoveBuff',
    'parentCell',
    'updateScorePanel',
    'getRealMass',
    'toLocaleString',
    'cColoredCellCount',
    'cHidePartyPanel',
    'party-canvas',
    'measureText',
    'scoreText',
    'DEAD',
    'SPECTATE',
    'SPEC',
    'uiPartyLeaderColor',
    'Total:',
    'stop',
    'Queue',
    'Mode: ',
    'Time: ',
    'Queued players: ',
    'You have left the queue for [',
    ']',
    'A match has been found. Good luck and have fun!',
    '#scrimmage-mode-select',
    '#scrimmage-mode-info',
    'option',
    'div',
    'scrimmage-info-',
    'modes',
    'sizes',
    'startmass',
    'respawnDelay',
    'teams',
    'maps',
    '#scrimmage-custom-btn-container',
    '#scrimmage-map',
    '<option value=\'',
    '\'>',
    '</option>',
    'change',
    'trigger',
    'selectedIndex',
    'prop',
    'updateMap',
    'MAP',
    'updateMode',
    'MODE',
    'updateSize',
    'SIZE',
    'updateStartMass',
    'STARTMASS',
    'updateLock',
    'LOCK',
    'updatePlayerById',
    'PLAYER_UPDATE',
    'updatePlayers',
    'PLAYER_LIST',
    'updateVirusDensity',
    'VIRUS_DENSITY',
    'updateRespawnDelay',
    'RESPAWN_DELAY',
    'updateAutoSplit',
    'AUTOSPLIT',
    'updatePublic',
    'PUBLIC',
    'updatePassword',
    'PASSWORD',
    'updateName',
    'NAME',
    '.scrimmage-full',
    '#scrimmage-menu',
    '#scrimmage-lobbies',
    '#scrimmage-lobbies-tbody',
    'leaderId',
    'leaderName',
    'map',
    'mode',
    'maxSize',
    'hasPasscode',
    '<div class=\'scrimmage-lock\'></div>',
    '<tr partyId=\'',
    '\'><td><span>',
    '</span></td><td><span>',
    '</span></td></tr>',
    'click',
    'custom-game-selected',
    'removeClass',
    '.custom-game-selected',
    'partyId',
    'attr',
    'addClass',
    '#scrimmage-lobbies-tbody tr',
    '#scrimmage-name',
    'selected',
    '#scrimmage-map option[value=\'',
    '#scrimmage-mapmode',
    '#scrimmage-mapsize',
    'placeholder',
    '#scrimmage-startmass',
    '#scrimmage-mapmode option[value=\'',
    '#scrimmage-mapsize option[value=\'',
    '#scrimmage-virusDensity',
    '#scrimmage-respawnDelay',
    'checked',
    '#scrimmage-autoSplit',
    '#scrimmage-public',
    '#scrimmage-password',
    '#scrimmage-lockteams',
    'checkLock',
    'disabled',
    '#cgp-',
    'removeAttr',
    '.custom-game',
    ' option[value=\'',
    '#cgp-name-',
    '#scrimmage-custom-players',
    '<tr><td><span id=\'cgp-name-',
    '</span></td>',
    'getTeamOptions',
    '</tr>',
    '\\d+',
    'match',
    'option:selected',
    'find',
    'sendCustomGameUpdate',
    '<td><select class=\'custom-game\' id=\'cgp-',
    '\'><option value=\'0\'>Spectator</option>',
    '\' class=\'t',
    '</select></td>',
    'nameCache',
    'massLastAmount',
    'getMass',
    'getSizeCache',
    'massType',
    'toShortString',
    'toString',
    'getNumber',
    'cacheContainer',
    'getSizeCacheSprite',
    'texture',
    'clearCacheContainer',
    'K',
    'M',
    'B',
    'sprites',
    'spritesIndex',
    'buildSizeCache',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'Verdana',
    'bold',
    '#fff',
    'black',
    'textOutlineSize',
    'Text',
    'needsPixiUpdate',
    'sprite',
    'set',
    'anchor',
    'cThemeEnabled',
    'tint',
    'getPlayerById',
    'SELF',
    'cellSprite',
    'container',
    'skinSprite',
    'massSprite',
    'nameSprite',
    'cacheUpdate',
    'getNameCache',
    'spiked',
    'aCustomSpike',
    'aCustomMother',
    'levelSkins',
    'getSkin',
    'isGif',
    'getTexture',
    'cDisableAutoNameHiding',
    'levelNames',
    'lowerName',
    'effect',
    'nameEffectSprite',
    'cShowMass',
    'debuffSprite',
    'shieldSprite',
    'motherCustomEnabled',
    'cDisableEventSkins',
    'motherCustom',
    'setDefaultSpriteAnchor',
    'defaultData',
    'updatedPlayers',
    'shift',
    'skinCache',
    'normal',
    'outlineColor',
    'fontFamily',
    'stroke',
    'fontWeight',
    'fontSize',
    'fill',
    'updateText',
    'LOADING',
    '.gif',
    'endsWith',
    'loadFromFrameData',
    'LOADED',
    'crossOrigin',
    'load',
    'beginPath',
    'arc',
    'closePath',
    'clip',
    'drawImage',
    'from',
    'ERROR',
    'src',
    'Gota Web ',
    'setUint8',
    'cSilentLogin',
    'setInt32',
    'setUint16',
    'sendChat',
    'sendPartyAction',
    'setUint32',
    'sendShowProfile',
    'sendWhisper',
    'sendSubPanel',
    'skinName',
    'r',
    'g',
    'b',
    'chatColor',
    'sendLockedNameChange',
    'rViewDistance',
    'sendQueue',
    'sendCustomGame',
    'sendLeaveMatch',
    'sendShowLobbies',
    'sendJoinLobby',
    'sendCaptcha',
    'setInt16',
    'sendCustomGameUpdateString',
    'charCodeAt',
    'fromCharCode',
    'message',
    'code',
    'This account has been permanently suspended by an administrator.',
    'auth/user-disabled',
    'auth/popup-closed-by-user',
    'white',
    'STAFF',
    'Gota.io Staff',
    'build',
    'royalblue',
    'VERIFIED',
    'Verified Player',
    'check_circle',
    'i',
    'material-icons',
    'user-badge',
    'data-balloon',
    'data-balloon-pos',
    'setAttribute',
    'up',
    'li',
    'user-embed menu-sub-bg2',
    'backgroundColor',
    'uiMenuHeaderBackgroundColor',
    'img',
    'avatar',
    'alt',
    'username',
    'info',
    'server',
    'presence',
    'timestamp',
    'getTime',
    'status offline',
    'Not playing on any server',
    'status ',
    'status',
    'ONLINE',
    'online',
    'Playing ',
    'Spectating ',
    ' on ',
    ' (ID ',
    'status pending',
    'Pending Friend Request',
    'actions',
    '#main-social',
    'Join Server',
    '\'s ID is ',
    'done',
    'Add as Friend',
    'isHandlingRequest',
    '/api/v1/social/friends',
    'application/json',
    'Remove Friend',
    'Are you sure you want to remove "',
    '" as your friend?',
    'off',
    'callbacks',
    'elements',
    '#profile-username',
    '#profile-avatar',
    'Level ',
    'level',
    'levelData',
    '&nbsp;&nbsp;&nbsp;[',
    'xp_current',
    'xp_needed',
    '#profile-level',
    'title',
    '#profile-title',
    '#profile-name',
    'hide',
    'cursor',
    'pointer',
    'default',
    'spin',
    '#profile-close-btn',
    '#social-friends .user-list',
    '#social-uid',
    'title-text center',
    'You have no friends \uD83D\uDE25',
    'pendingFriends',
    'replaceChild',
    'forEach',
    'profiles',
    '/api/v1/social/friends/pending',
    '/users/',
    'timestamps',
    'indexOf',
    ' online',
    '#social-friends-count',
    '/friendships/',
    'hasOwnProperty',
    'balloon',
    'event-',
    'key',
    'toggleClass',
    '.server-tab',
    'incrementPlay',
    'undefined',
    'startPreRoll',
    'player',
    '#btn-play',
    'main-servers',
    '#btn-servers',
    'main-options',
    '#btn-options',
    'main-hotkeys',
    '#btn-hotkeys',
    'main-themes',
    '#btn-themes',
    'main-subpanel',
    '#btn-cellpanel',
    'https://www.reddit.com/r/PlayGotaIO/',
    '_blank',
    'open',
    '#btn-reddit',
    'https://gota.io/discord',
    '#btn-discord',
    'keypress',
    '#btn-spec',
    '#autocomplete-panel',
    'startsWith',
    '<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>',
    'substring',
    'findIndex',
    'triggers',
    '<tr><td>',
    '</td><td>',
    'description',
    '</td></tr>',
    '#autocomplete-panel tbody',
    'values',
    'filter',
    '<h3>Emotes</h3>',
    '<img name=\'',
    '\' title=\'',
    '\' src=\'https://gota.io/emotes/',
    '.png\' />',
    '<h3>Gifs</h3>',
    '\' src=\'https://gota.io/emotes/gifs/',
    '.gif\' />',
    'keyup',
    'nodeName',
    'TD',
    'parentElement',
    'focus',
    'IMG',
    'nodeValue',
    'attributes',
    '#animationDelay',
    '#rAnimationDelay',
    '#viewDistance',
    '#rViewDistance',
    'rUiScale',
    'parseFloat',
    '#uiScale',
    '#rUiScale',
    'transform',
    'scale(',
    '.ui-scale',
    'background-image',
    'url(https://gota.io/emotes/',
    'random',
    '.png)',
    '#chat-emote-btn',
    'toggle',
    '#emote-panel',
    '#emote-panel ul li img',
    'chat-panel',
    'mousedown',
    'chat-resize',
    'getComputedStyle',
    'defaultView',
    'mousemove',
    'documentElement',
    'mouseup',
    'px',
    'removeEventListener',
    '.checkbox-options',
    '.options-container select',
    '.options-container input[type=range]',
    '#popup-changelog',
    '#btn-changelog',
    '#btn-close-changelog',
    '#btn-accept',
    '#btn-decline',
    'select',
    'Copy',
    'execCommand',
    '#popup-party-code-content button',
    '#menu-invite',
    '/t ',
    '#menu-whisper',
    '#menu-profile',
    'Private',
    '#menu-pu_pr span',
    'Public',
    '#menu-pu_pr',
    '#menu-promote',
    '#menu-kick',
    '#menu-spectate',
    '#menu-block',
    'chat-emote-btn',
    'popup-party-code',
    '#popup-chat-tab-editor',
    '#aEditChatTabs',
    '#cte-tab-selector',
    '#btn-chat-tab-editor-add',
    '#btn-chat-tab-editor-remove',
    '#btn-chat-tab-editor-update',
    '#popup-asset-skinner .title-text',
    'asset',
    '#input-asset-skinner',
    '#popup-asset-skinner',
    '.custom-asset-skinner',
    'a',
    '#popup-asset-skinner .back-button',
    '#btn-custom-asset-set',
    '#btn-custom-asset-clear',
    'drop',
    'test',
    'result',
    'readAsDataURL',
    'dragover',
    '#popup-food-colors',
    '#btn-food-colors',
    'theme.json',
    'text/plain',
    '#btn-theme-export',
    '#theme-import',
    '#btn-theme-import',
    'files',
    '#main-themes .options-container',
    '/api/v1/options/setFlags',
    '#cGlobalLeaderboard',
    'consented',
    'signOut',
    'users/',
    '#account-loader',
    '#authed',
    'display: flex;',
    '#account-avatar',
    '#account-username',
    '&nbsp;&nbsp;&nbsp;&nbsp;',
    ' XP',
    '#account-level',
    '%',
    '.xp-meter > span',
    'loadServers',
    'port',
    '?',
    'servers/account/',
    'DISCORD_LINKED',
    'loadDiscord',
    'exists',
    'Your account is linked with ',
    'discrim',
    '#discordLinkStatus',
    '#discordLink',
    '#discordUnlink',
    'padding',
    '15px',
    '.discord-login-container',
    '30px',
    'onSnapshot',
    'doc',
    'discord',
    'collection',
    'firestore',
    'tokens',
    'getMonth',
    'setMonth',
    '#redeem-tokens',
    'You have 0 tokens.',
    '#token-amount',
    'You have ',
    ' tokens, maximum expiry date: ',
    '#redeem-spend',
    '#account-titles',
    'loadPrivateData',
    '<option value=\'0\'>Default Title</option>',
    'inline-block',
    'content',
    'read',
    '#popup-message-title',
    '#popup-message-content',
    '#popup-message',
    'private/',
    '#guest',
    '#no_cookie_consent',
    'onAuthStateChanged',
    'signInWithPopup',
    '#account-login',
    '#account-logout',
    'https://store.gota.io/',
    '#account-shop',
    '#account-social',
    '#social-back-button',
    '#account-profile',
    '#food-colors-close-btn',
    'Set',
    '/api/v1/options/setTitle',
    '/api/v1/options/markAsRead',
    '#popup-message-read-btn',
    '#account-username-input',
    'trim',
    'Please provide a username!',
    '/api/v1/social/username',
    '#account-set-username-btn',
    '.popup-panel .back-button',
    'https://accounts.gota.io/api/v1/options/discord/redirect?token=',
    'popup',
    'width=600,height=700',
    '/api/v1/options/discord/unlink',
    'By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.',
    '#redeem-name',
    '/api/v1/options/redeem',
    'submit',
    '.error-banner',
    'Enter friend\'s UID (found above add friend button)',
    'replace',
    'string',
    'Please enter a valid UID',
    '#btn-add-friend',
    'tagName',
    'activeElement',
    'INPUT',
    'setSelectionRange',
    'blur',
    'beforeunload',
    'Are you sure you want to leave Gota.io?',
    'keybinds-btn-selected',
    '.keybinds-btn',
    '#btn-reset-keybinds',
    '#scrimmage-info-',
    '#btn-queue',
    '#btn-leave-match',
    '#btn-custom-create',
    '#btn-custom-return',
    '#btn-custom-start',
    '#btn-custom-lobbies',
    '#btn-lobbies-refresh',
    'Enter the password to join this game',
    '#btn-lobbies-join',
    '#btn-lobbies-return',
    'Enter a password to join your game (32 max characters)',
    'Enter a new name for your game (32 max characters)',
    'grecaptcha',
    'ready',
    '6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3',
    'login',
    'execute',
    'hex',
    'toRgbString',
    'spectrum',
    'showAlpha',
    '#uiGameBackgroundColor',
    '#uiGameBorderColor',
    'Add',
    '_FoodColors',
    '#pFoodColors',
    '#food-color-list',
    '<div c=\'',
    '\' style=\'background:',
    ';color:',
    ';\'><span>',
    '</span><div><button class=\'btn-food-color\'>X</button></div></div>',
    'c',
    'eq',
    'parents',
    'splice',
    '.btn-food-color',
    '.keybinds-btn-selected',
    'first',
    '&nbsp;',
    'logo',
    'backgroundImage',
    'url(\'images/logo.png\')',
    'url(\'images/events/',
    '/logo.png\')',
    '<li><img name=\'',
    '.png\' /></li>',
    '.emote-list',
    '.gif\' /></li>',
    '.gif-list',
    '<option value="',
    '">',
    '#spEffect',
    'images/ejected_mass_skins/',
    '.png',
    'index',
    'customEjectedMass',
    'images/events/',
    '/ejected_mass.png',
    'images/effects/',
    '/spike_mother_happy.png',
    'images',
    '/spike_mother.png',
    '/spike.png',
    'table-row',
    '#performance-refresh',
    'cHideId',
    '.pID',
    'cHideServerDisplay',
    '.psvr',
    'alpha',
    'cTransCells',
    'cHideChat',
    '#chat-panel',
    '#minimap-panel',
    'cHideScorePanel',
    'cHideLeaderboard',
    '#leaderboard-panel',
    'cHideExtraPanel',
    '#extra-panel',
    'disable',
    'enable',
    'cResizableChat',
    '#chat-resize',
    'sShowNames',
    'sShowSkins',
    'sMassType',
    'sTextOutlines',
    'strokeThickness',
    'sQuality',
    '.fg-interface-color',
    '.interface-color',
    'border-color',
    '.gota-btn',
    '.popup-panel',
    '.main',
    '.main-bottom-stats',
    'background-color',
    '.hud-panel .interface-color',
    '.ui-pane',
    '#chat-tab-container',
    '.chat-tab',
    '.main-panel',
    '.options-container',
    '.menu-title',
    '.menu-sub-bg',
    '.server-active',
    '#server-content',
    '.menu-sub-bg2',
    '.server-table tbody',
    '#social-friends-online-count',
    'background',
    '#borderSize',
    'rBackgroundOpacity',
    '#backgroundOpacity',
    'opacity',
    'canvas-background',
    'url(\'',
    '\')',
    'backgroundSize',
    '100% 100%',
    'Unable to load custom theme virus.',
    'Unable to load custom theme mother cell.',
    '#minimap-canvas',
    '2px solid rgba(255, 255, 255, .2)',
    '270px',
    'Enter new locked name!',
    'Please enter a valid name!',
    'Locked names must be 2 or more characters long.',
    'Locked names must be 20 or less characters long.',
    'You are about to change your locked name to: \'',
    '\'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?',
    '#btn-chg-ln',
    '#btn-updateSP',
    'rules',
    '#btn-subpanel-rules',
    'rgb',
    '#spNameColor',
    '#spChatColor',
    '#spSkinName',
    '#spLowerName',
    '#spEffect select',
    '#spNameFont select',
    'toRgb',
    'get',
    '#spNameFont',
    '.subpanel-name-dashboard',
    '#subpanel-rules',
    '#subpanel-content',
    'loadSubPanel',
    'locked',
    '#main-subpanel',
    '#spLockedName',
    'lastChange',
    'Last Changed: ',
    'expiry',
    'seconds',
    '#spExpiry',
    'Never',
    'accounts',
    'playerText',
    '#servers-body-eu',
    '#servers-body-na',
    '#servers-body-ap',
    ' title="Players: ',
    '&#10;Bots: ',
    '"',
    '<tr id="s_',
    '" class="server-row" server="',
    '"><td class="server-table-name">',
    '</td><td class="server-table-players"',
    '>',
    '</td><td class="server-table-mode">',
    '#servers-body-',
    '" class="account-server server-row" server="',
    '</td><td class="server-table-players">',
    'prepend',
    '.server-row',
    'server-selected',
    '#s_',
    '#server-tab-',
    'inherit',
    'server-active',
    '#server-tab-container',
    'uiMenuSubBackgroundColor',
    '#servers-',
    '_ChatTabs',
    '#chat-body-',
    ' tr',
    'maxMessages',
    ' tr:first-child',
    'cloneNode',
    'chat-body-',
    '#chat-container-',
    'scrollHeight',
    'scrollTop',
    'outerHeight',
    'action',
    'Invalid command!',
    '#chat-container',
    'Unnamed',
    '<li class=\'chat-tab\' id=\'chat-tab-',
    '\' name=\'',
    '\'><span>',
    '</span></li>',
    '<div class=\'chat-inner-container\' id=\'chat-container-',
    '\'><table class=\'chat-table\'><tbody id=\'chat-body-',
    '\'></tbody></table></div>',
    'uiBorderColor',
    '#chat-tab-',
    '<span>',
    '</span>',
    'chat-active-tab',
    'chat-active-container',
    '.chat-inner-container',
    '#cte-tab-name',
    '#cte-type-',
    '#cte-max-messages',
    'New',
    'context-name',
    '.context-action',
    '&gt;',
    '&lt;',
    'iChatWidth',
    'iChatHeight',
    'options',
    'setItem',
    'localStorage',
    'keybinds',
    'theme',
    'subpanel',
    'getItem',
    'isInteger',
    's',
    'lockedName',
    'readAsText',
    '#cThemeEnabled',
    '<img src="https://gota.io/emotes/',
    '.png" height="17" width="17" alt="',
    '<img src="https://gota.io/emotes/gifs/',
    '.gif" height="17" width="17" alt="',
    'Random',
    'Maximum Cells Upgrade',
    'extracells',
    'MODIFIER',
    'Extra Consumable Slot',
    'extraconsumable',
    'Merge',
    'merge',
    'PASSIVE',
    'Grow',
    'grow',
    'Speed',
    'speed',
    'Shield',
    'shield',
    'Virus',
    'spike',
    'CONSUMABLE',
    'Disrupt',
    'disrupt',
    'Teleport',
    'teleport',
    '_disrupt',
    'DEBUFF',
    'Silver',
    'phoenix',
    'Consumable Shield',
    '_shield',
    'Magnet',
    'magnet',
    'Decay',
    'decay',
    '_decay',
    'image',
    'images/powerups/',
    'images/shield.png',
    'images/debuff.png',
    'passiveBuffs',
    'passiveSortedBuffs',
    'consumableBuffs',
    'nextCacheUpdate',
    'sortPassiveBuffs',
    'onPassiveBuffsUpdate',
    'markCacheForUpdate',
    'Recieved buff: ',
    'powerup',
    'Lost buff: ',
    'stack',
    'updateCache',
    '#222',
    'bold 16pt Calibri',
    'draw',
    'startTime',
    'expireTime',
    'getCooldown',
    '#000',
    'moveTo',
    'globalAlpha',
    'hearts',
    'delay',
    'frames',
    'getFrame',
    'getLength',
    'getImage',
    'frameInfo',
    'foodColors',
    '#FFFFFF',
    '#FF9BDC',
    '#FF00FF',
    '#FF0000',
    '#C80000',
    '#FF6900',
    '#FFFF00',
    '#00FF00',
    '#008000',
    '#008080',
    '#00FFFF',
    '#0096FF',
    '#0000FF',
    '#CA48FA',
    '#8A2BE2',
    '#D2C878',
    '#8C4614',
    'You cannot block that player.',
    'Unblocked player with ID: ',
    'Blocked player with ID: ',
    'Whisper a player by ID',
    'whisper',
    't',
    'w',
    'Invalid player id.',
    'Reply to previous whisper',
    'reply',
    '/r ',
    'Send a message to other party members',
    'p',
    '/p ',
    'Invite a player to the party',
    'invite',
    'Invalid ID.',
    'Leave your current party',
    'leave',
    'l',
    'Promote a party member to leader',
    'promote',
    'Kick a player from the party',
    'kick',
    'Clear the chat',
    'chat-body',
    'firstChild',
    'Get your current ID',
    'Your id is ',
    'You need to be connected to a server to use this command.',
    'Show the scrimmage menu',
    'scrimmenu',
    'Join a party with a code',
    'j',
    'Set the party to private',
    'private',
    'Allow players to join the party without an invite',
    'public',
    'Reset chat size',
    'resetchat',
    'Reset chat tab settings',
    'resetchattabs',
    'Spectate a player',
    'Disconnect from the server',
    'Get Account UID',
    'account',
    'You are not logged in.',
    'UID: ',
    'Block or unblock a player by ID',
    '4Head',
    'BibleThump',
    'DansGame',
    'DatSheffy',
    'FailFish',
    'FeelsBadMan',
    'FeelsGoodMan',
    'FeelsMadMan',
    'GabeN',
    'HassanChop',
    'HeyGuys',
    'Kappa',
    'KappaPride',
    'Keepo',
    'Kreygasm',
    'NotLikeThis',
    'OMGScoots',
    'PJSalt',
    'PogChamp',
    'rekt',
    'rip',
    'SaltyCorn',
    'sodaC',
    'sodaHeyGuys',
    'sodaNOPE',
    'sodaW',
    'SwiftRage',
    'WutFace',
    'ResidentSleeper',
    'LUL',
    'MikuFail',
    'PepoHype',
    'KKona',
    'MeguFace',
    'AngryBork',
    'AngeryBOYE',
    'TohruFlex',
    'Sadness',
    'nou',
    'MarioFP',
    'Ditto',
    'MichaelPls',
    'RareParrot',
    'PepePls',
    'RooNoticeMe',
    'PepeEyes',
    'EverythingsFine',
    'WeSmart',
    'PandaAww',
    'SleepyCat',
    'Clap',
    'A',
    'C',
    'D',
    'E',
    'F',
    'MOUSE1',
    'MOUSE2',
    'MOUSE3',
    'MOUSE4',
    'MOUSE5',
    'HELP',
    'BACK_SPACE',
    'TAB',
    'CLEAR',
    'ENTER',
    'ENTER_SPECIAL',
    'SHIFT',
    'CONTROL',
    'ALT',
    'PAUSE',
    'CAPS_LOCK',
    'KANA',
    'EISU',
    'JUNJA',
    'FINAL',
    'HANJA',
    'ESCAPE',
    'CONVERT',
    'NONCONVERT',
    'ACCEPT',
    'MODECHANGE',
    'SPACE',
    'PAGE_UP',
    'PAGE_DOWN',
    'END',
    'HOME',
    'LEFT',
    'UP',
    'RIGHT',
    'DOWN',
    'SELECT',
    'PRINT',
    'EXECUTE',
    'PRINTSCREEN',
    'INSERT',
    'DELETE',
    ';',
    '<',
    '=',
    'AT',
    'G',
    'H',
    'I',
    'J',
    'L',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'OS_KEY',
    'CONTEXT_MENU',
    'SLEEP',
    'NUMPAD0',
    'NUMPAD1',
    'NUMPAD2',
    'NUMPAD3',
    'NUMPAD4',
    'NUMPAD5',
    'NUMPAD6',
    'NUMPAD7',
    'NUMPAD8',
    'NUMPAD9',
    'MULTIPLY',
    'ADD',
    'SEPARATOR',
    'SUBTRACT',
    'DECIMAL',
    'DIVIDE',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'F13',
    'F14',
    'F15',
    'F16',
    'F17',
    'F18',
    'F19',
    'F20',
    'F21',
    'F22',
    'F23',
    'F24',
    'NUM_LOCK',
    'SCROLL_LOCK',
    'WIN_OEM_FJ_JISHO',
    'WIN_OEM_FJ_MASSHOU',
    'WIN_OEM_FJ_TOUROKU',
    'WIN_OEM_FJ_LOYA',
    'WIN_OEM_FJ_ROYA',
    'CIRCUMFLEX',
    'EXCLAMATION',
    'DOUBLE_QUOTE',
    'HASH',
    'DOLLAR',
    'PERCENT',
    'AMPERSAND',
    'UNDERSCORE',
    'OPEN_PAREN',
    'CLOSE_PAREN',
    'ASTERISK',
    'PLUS',
    'PIPE',
    'HYPHEN_MINUS',
    'OPEN_CURLY_BRACKET',
    'CLOSE_CURLY_BRACKET',
    'TILDE',
    'VOLUME_MUTE',
    'VOLUME_DOWN',
    'VOLUME_UP',
    'SEMICOLON',
    'EQUALS',
    'COMMA',
    'MINUS',
    'PERIOD',
    'SLASH',
    'BACK_QUOTE',
    'OPEN_BRACKET',
    'BACK_SLASH',
    'CLOSE_BRACKET',
    'QUOTE',
    'META',
    'ALTGR',
    'WIN_ICO_HELP',
    'WIN_ICO_00',
    'WIN_ICO_CLEAR',
    'WIN_OEM_RESET',
    'WIN_OEM_JUMP',
    'WIN_OEM_PA1',
    'WIN_OEM_PA2',
    'WIN_OEM_PA3',
    'WIN_OEM_WSCTRL',
    'WIN_OEM_CUSEL',
    'WIN_OEM_ATTN',
    'WIN_OEM_FINISH',
    'WIN_OEM_COPY',
    'WIN_OEM_AUTO',
    'WIN_OEM_ENLW',
    'WIN_OEM_BACKTAB',
    'ATTN',
    'CRSEL',
    'EXSEL',
    'EREOF',
    'PLAY',
    'ZOOM',
    'PA1',
    'WIN_OEM_CLEAR',
    'heart',
    'star',
    'home',
    'apple',
    'spiral',
    'dice',
    'chicken',
    'ghost',
    'burger',
    'bow',
    'cloud',
    'skull',
    'mug',
    'flower',
    'music',
    'checkmark',
    'clover',
    'crown',
    'fancy',
    'fish',
    'fire',
    'lightning',
    'paw',
    'duck',
    'snowflake',
    'bomb',
    'butterfly',
    'cherry',
    'watermelon',
    'cat',
    'cupid',
    'sword',
    'tornado',
    'radioactive',
    'rocket',
    'wave',
    'letter_a',
    'letter_b',
    'letter_c',
    'letter_d',
    'letter_e',
    'letter_f',
    'letter_g',
    'letter_h',
    'letter_i',
    'letter_j',
    'letter_k',
    'letter_l',
    'letter_m',
    'letter_n',
    'letter_o',
    'letter_p',
    'letter_q',
    'letter_r',
    'letter_s',
    'letter_t',
    'letter_u',
    'letter_v',
    'letter_w',
    'letter_x',
    'letter_y',
    'letter_z',
    'number_0',
    'number_1',
    'number_2',
    'number_3',
    'number_4',
    'number_5',
    'number_6',
    'number_7',
    'number_8',
    'number_9',
    '0:00',
    '_',
    'Invalid HEX color.',
    '#000000',
    'items',
    'dataTransfer',
    'kind',
    'file',
    'getAsFile',
    'msSaveOrOpenBlob',
    'navigator',
    'createObjectURL',
    'download',
    'revokeObjectURL',
    'URL',
    'regex',
    'Spectator',
    'Blue',
    'Red',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Brown',
    '#25f',
    '#f31',
    'green',
    'yellow',
    'purple',
    'orange',
    'ampad',
    'burnstown',
    'chlorinar',
    'Facon',
    'archistico',
    'breakaway',
    'conformity',
    'electroharmonix',
    'PWJoyeuxNoel',
    'leckerli-one',
    'IceCaps',
    '#00c9ff',
    'BrazierFlame',
    '#e25822',
    '" style="font-family:',
    'Notification',
    'permission',
    'granted',
    'Your match has started.',
    'https://gota.io/assets/images/favicon.png',
    'policyID',
    'CP_0918_01',
    'policyLink',
    'https://gota.io/policies/privacy.html?v=',
    '#cookies',
    'consentOption',
    '#cc_acceptCookies',
    'consentCookie',
    'cookieConsent',
    'yes+',
    '/web',
    'cookieBanner',
    '#cookie-banner',
    '#declineCookies',
    '#acceptCookies',
    'backwardsCompatable',
    'consentHandler',
    'getConsentCookie',
    'showCookieBanner',
    'deleteConsentCookie',
    'createConsentCookie',
    'handlersBound',
    'bindBannerHandlers',
    'banner',
    'decline',
    'accept',
    ' <a href="',
    '" target="_blank">Our Cookie Policy!</a>',
    '#cookie-banner .description',
    'exdays',
    'setTime',
    'expires=',
    'toUTCString',
    'cookie',
    ';path=',
    'path',
    '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=',
    'cookieconsent_status',
    'allow',
    'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;',
    'playCounter',
    'Advertisement Loading...',
    'preroll'
  ];

  function ab(ac, ad, ae) {
    if (!ac) {
      return;
    };
    var af = this.location.href.split('://')[1].split('/')[0].split(':')[0];
    var ab = ac.split(',');
    for (var ag = 0; ag < ab.length; ag++) {
      var ah = ab[ag];
      if (ah == af) {
        return;
      };
      if (!ad) {
        continue;
      };
      ah = af.split('.' + ah);
      if (ah.length == 2 && !ah[1]) {
        return;
      }
    };
    throw ae || 'error';
  }

  function ah(ah) {
    var ab = $('#' + ah);
    if (ab.css('display') == 'none') {
      ac();
      ab.slideDown(500);
    }
  }

  function ac() {
    $('#main-right').children().each(function() {
      if ($(this).css('display') == 'block') {
        $(this).slideUp(500);
      }
    });
  }

  function af() {
    var ai = window.PIXI;
    const aj = ai;
    window.PIXI = null;
    var ak;
    const al = new aj.Container();
    const am = new aj.Container();
    const ao = new aj.Container();
    const aq = new aj.Container();
    const ar = new aj.Container();
    const au = new aj.Container();
    const av = new aj.Sprite(aj.Texture.EMPTY);
    var aw;
    aq.addChild(ao);
    aq.addChild(ar);
    aq.addChild(au);
    al.addChild(am);
    al.addChild(aq);
    al.addChild(av);
    var ax, ay, az, ba, bb, bc, bd, bf, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, bs, bt, bu, bv, bw, bx, bz, ca, cb, cc, cd, ce = false,
      cf = 0,
      cg = 0,
      ch = null,
      ci = null,
      cj = false,
      ck = {
        elements: [],
        callbacks: [],
        pendingFriends: [],
        timestamps: []
      },
      cl = [],
      cm = false,
      cn = null,
      co = true,
      cp;
    const cq = Math.PI * 2;
    const cr = 256,
      cs = 268,
      ct = 64;
    var cu, cv, cw;
    const cx = {
      mouseFrozenDiv: $('#score-mouse'),
      playerScore: $('#playerScore'),
      playerCells: $('#playerCells'),
      playerFps: $('#playerFps'),
      resetInfo: $('#extra-reset-timer'),
      resetTime: $('#resetTime'),
      respawnInfo: $('#extra-respawn-cooldown'),
      respawnCooldown: $('#respawnCooldown'),
      spectatorCount: $('#spectatorCount'),
      playerCellCount: 0,
      minimapCoords: $('#minimap-coordinates'),
      partyPanel: bo,
      friendOnlineCount: $('#social-online-friends-count'),
      playerCellCount: ab
    };;
    const ae = new firebase.auth.GoogleAuthProvider();;
    var cy = {
      key: 'xmas',
      foodColors: [
        9225727,
        12574719,
        14802654,
        9225727
      ],
      customEjectedMass: false,
      motd: '',
      endDate: 1703721600000,
      enabled: false,
      motherCustomEnabled: false,
      motherCustom: function(aa) {},
      happyMotherCells: []
    };
    cy.enabled = new Date() < cy.endDate;
    firebase.initializeApp({
      apiKey: 'AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM',
      authDomain: 'accounts.gota.io',
      databaseURL: 'https://gota-io.firebaseio.com',
      projectId: 'gota-io',
      storageBucket: 'gota-io.appspot.com',
      messagingSenderId: '570450309042',
      appId: '1:570450309042:web:380ab6c94d44de2f'
    });
    var cz = {};
    var ac = {
      x: (ac.x_ - ac.x) * ab,
      y: (ac.y_ - ac.y) * ab,
      innerHTML: '[System] ' + ah.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      font: '16px Calibri',
      fillStyle: da.uiLeaderboardHighlightSelf,
      fillStyle: da.uiForegroundColor,
      offset: 8,
      state: af.getUint8(af.offset++),
      x_: af.getInt16(af.offset, true),
      y_: af.getInt16(af.offset + 2, true),
      score: af.getInt32(af.offset + 4, true),
      offset: 2,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      offset: 4,
      innerHTML: db,
      value: ag,
      innerHTML: ae,
      id: 'scrimmage-info-' + ag,
      offset: 2,
      innerText: 'Not playing on any server',
      className: 'status offline',
      needsPixiUpdate: true,
      src: ab + '/spike_mother.png',
      needsPixiUpdate: true,
      needsPixiUpdate: true,
      src: af,
      width: ae.width,
      height: ae.height
    };;
    var dc = [{
        name: 'All',
        flags: 255,
        maxMessages: 100
      },
      {
        name: 'Party',
        flags: 2,
        maxMessages: 100
      }
    ];
    var dd = 0;
    var de = {
      cDisableAA: false,
      cAutoRespawn: false,
      cHideId: false,
      cHideServerDisplay: true,
      sShowNames: 'ALL',
      sShowSkins: 'ALL',
      sRenderType: 'AUTO',
      sTextOutlines: 'NONE',
      sQuality: 'ULTRA',
      sMassType: 'DEFAULT',
      cTransCells: false,
      cShowMass: false,
      cShowBorder: false,
      cSilentLogin: false,
      cHideChat: false,
      cHideMinimap: false,
      cShowCoordinates: false,
      cHideFood: false,
      cColoredPing: false,
      cColoredCellCount: false,
      cThemeEnabled: false,
      cDisableAutoZoom: false,
      cAutoDecline: false,
      cDisableEventSkins: false,
      cResizableChat: false,
      cDisableAutoNameHiding: false,
      cDisableAutoFoodHiding: false,
      cDisablePersistEjectMass: false,
      iChatWidth: '360px',
      iChatHeight: '250px',
      rUiScale: 1,
      rAnimationDelay: 90,
      rViewDistance: 100,
      _ChatTabs: JSON.parse(JSON.stringify(dc))
    };
    var df = {
      kContextMenu: 3,
      kEjectMass: 87,
      kSplit: 32,
      kToggleSpec: 81,
      kDoubleSplit: -1,
      kTripleSplit: -1,
      kQuadSplit: -1,
      kHexaSplit: -1,
      kFreezeMouse: -1
    };
    var dg = false;
    const dh = Object.assign({}, df);;
    const da = {
      version: 2,
      uiForegroundColor: 'rgb(255, 255, 255)',
      uiBackgroundColor: 'rgba(22, 22, 22, 0.8)',
      uiBorderColor: 'rgba(255, 255, 255, .2)',
      uiMenuBackgroundColor: '#2A2A2A',
      uiMenuTitleBackgroundColor: '#404040',
      uiMenuSubBackgroundColor: '#363636',
      uiMenuSubBackground2Color: '#404040',
      uiButtonColor: '#444444',
      uiGameBackgroundColor: '#121212',
      uiGameBorderColor: '#ff0000',
      uiLeaderboardHighlightSelf: '#ffaaaa',
      uiLeaderboardHighlightParty: '#ffff00',
      uiPartyLeaderColor: '#00ffff',
      uiGameColorSuccess: '#00ff00',
      uiGameColorWarning: '#ffff00',
      uiGameColorError: '#ff0000',
      _FoodColors: [],
      aCustomBackground: '',
      aCustomSpike: '',
      aCustomMother: '',
      rBorderSize: 32,
      rBackgroundOpacity: 1
    };
    const di = {
      dj: da[dj]
    };
    for (var dj in da) {
      ;
    };;
    var dk = [];
    var dl = {
      rules: false,
      nameColor: {
        r: 0,
        g: 255,
        b: 255
      },
      chatColor: 0,
      lowerName: false,
      skinName: '',
      effect: 0,
      nameFont: 0
    };
    var dm = null;
    var dn = null;
    var dp = 0;

    function dq() {
      ax = document.getElementById('canvas');
      ay = document.getElementById('minimap-canvas');
      az = ay.getContext('2d');
      bn = $('#main');
      bo = $('#party-panel');
      bp = $('.hud-panel');
      cc = $('#score-panel');
      bs = $('#main-scrimmage');
      bt = $('#context-menu');
      bu = $('#chat-input');
      bq = $('#leaderboard-header');
      cb = $('#scrimmage-custom');;;;;;;;;;;;;;
      dr();
      bv = false;
      window.onmousemove = function(ab) {
        ba.mouseRawX = ab.clientX;
        ba.mouseRawY = ab.clientY;
      };
      window.onkeydown = function(ab) {
        var ah = ab.which || ab.keyCode || ab.charCode;
        if (ah <= 5) {
          return;
        };
        if (dg) {
          db(ah);
          ab.preventDefault();
          return;
        };
        if ($('input').is(':focus')) {
          return;
        };
        if (ah == 27) {
          ds(bn);
          if (($('#popup-profile') || $('#popup-account-username').css('display') === 'none').css('display') === 'none') {
            dt($('#popup-profile'));
            dt($('#popup-account-username'));
          }
        };
        if (bn.css('display') != 'none') {
          return;
        };
        ba.handleKey(ah);
      };
      window.onkeyup = function(ab) {
        var ah = ab.which || ab.keyCode || ab.charCode;
        if (ah == df.kEjectMass) {
          bv = false;
          if (ba) {
            ba.sendPacket(new bb.sendEjectMass(false));
          }
        }
      };
      window.onmousedown = function(ab) {
        var ah = ab.button + 1;
        if (dg) {
          db(ah);
          ab.preventDefault();
          return;
        };
        if ($('input').is(':focus') || bn.css('display') != 'none') {
          return;
        };
        ba.handleKey(ah);
      };
      window.onmouseup = function(ab) {
        var ah = ab.button + 1;
        if (ah == df.kEjectMass) {
          bv = false;
          if (ba) {
            ba.sendPacket(new bb.sendEjectMass(false));
          }
        }
      };
      window.onblur = function(ab) {
        if (bv && de.cDisablePersistEjectMass) {
          bv = false;
          if (ba) {
            ba.sendPacket(new bb.sendEjectMass(false));
          }
        }
      };
      $(document).on('wheel', function(ah) {
        if (bn.css('display') == 'none' && ah.target.id == 'canvas') {
          var ab = ah.originalEvent.wheelDelta || ah.originalEvent.deltaY * -1;
          if (ab > 0) {
            ba.mouseZoom *= 1.1;
          } else {
            ba.mouseZoom *= 0.9;
          };
          ba.mouseZoom = ba.mouseZoom > 5 ? 5 : ba.mouseZoom < 0.1 ? 0.1 : ba.mouseZoom;
        }
      });
      document.addEventListener('contextmenu', function(ab) {
        ab.preventDefault();
      });
      du();
      dv();
      var af = window.location.href.split('#').slice(1).join('#').split('&');
      var ae = '';
      if (af[0]) {
        ae = af[0].toLowerCase();
      };
      if (af[1]) {
        bx = af[1];
      };
      if (ae != null && ae != '') {
        ae = ae[0].toUpperCase() + ae.slice(1);
        dn = function() {
          var ab = null;
          if ((ab = dw(ae)) != null) {
            dx(ab.name);
            dy(ab.region);
          } else {
            ah();
          }
        };
      } else {
        dn = ah;
      };
      firebase.database().ref('/game').on('value', function(af) {
        var ab = af.val();
        if (ab.version !== version) {
          ba.selfMsg('Woah! Version ' + ab.version + ' is now available. Press Ctrl+R to update!');
        };
        if (cd != ab.motd && ab.motd !== '') {
          cd = ab.motd;
          ba.selfMsg(ab.motd);
        };
        if (ab.listRefresh != dp) {
          dp = ab.listRefresh;
          cz = {};
          ac(dn);
          clearInterval(dm);
          dm = setInterval(() => {
            ac();
          }, ab.listRefresh);
        };
        for (var ah in ab.titles) {
          ;
        }
      });

      function ac(ah) {
        jQuery.ajax({
          type: 'POST',
          dataType: 'json',
          url: 'https://accounts.gota.io/api/v1/utilities/servers',
          success: function(ab) {
            for (var ae of ab) {
              var bx = [];
              for (var af of ae.servers) {
                af.players = parseInt(af.players);
                af.bots = af.bots || 0;
                var ag = af.players + af.bots + '/' + af.playersMax;
                if (af.bots > 0) {
                  ag += '*';
                };
                var ad = new dz(af.name, af.address, af.players, af.bots, ag, af.gamemode, ae.region, af.ssl, af.order);
                bx.push(ad);
              };
              bx.sort((ab, ah) => {
                return ab.order - ah.order;
              });
              cz[ae.region] = {};
              for (var ac = 0; ac < bx.length; ac++) {
                var ad = bx[ac];
                cz[ae.region][ad.name] = ad;
              }
            };
            ea();
            if (ah != null) {
              ah();
            } else {
              if (bl != null) {
                dx(bl.name);
              }
            }
          },
          error: function(aa) {
            ea();
          }
        });
      }

      function ah() {
        if (bl != null) {
          dx(bl.name);
          return;
        };
        dy('eu');
        dx('Vendetta');
      }
      bd = {};
      bf = {};
      eb();
      $(window).unload(ec);
      ba = new ed();
      bb = new ee();
      ef();
      eg.init();
      eh();
      var ag = {
        view: ax,
        backgroundAlpha: 0,
        forceCanvas: de.sRenderType === 'CANVAS',
        antialias: !de.cDisableAA
      };
      ak = {
        renderer: aj.autoDetectRenderer(ag),
        stage: al
      };
      cu = ei(128);
      cv = ei(32);
      cw = ei(8);
      $(window).resize(ej);
      ej();
      bc = Date.now();
      fps = 0;
      ba.selfMsg('Welcome to Gota.io!');
      if (cy.enabled && cy.motd !== '') {
        ba.selfMsg(cy.motd);
      };
      ek();
      requestAnimationFrame(el);
    }

    function ej() {
      ax.width = window.innerWidth * 1;
      ax.height = window.innerHeight * 1;
      ak.renderer.resize(ax.width, ax.height);
      ak.stage.position.x = window.innerWidth * 1 / 2;
      ak.stage.position.y = window.innerHeight * 1 / 2;
    }

    function ei(ah) {
      var ab = new aj.Graphics();
      ab.beginFill(16777215);
      ab.drawCircle(0, 0, 128);
      ab.endFill();
      var ac = aj.RenderTexture.create({
        width: ab.width,
        height: ab.height,
        multisample: aj.MSAA_QUALITY.HIGH,
        resolution: window.devicePixelRatio
      });
      ak.renderer.render(ab, {
        renderTexture: ac,
        transform: new aj.Matrix(1, 0, 0, 1, ab.width / 2, ab.height / 2)
      });
      if (ak.renderer.framebuffer) {
        ak.renderer.framebuffer.blit();
      };
      ab.destroy(true);
      return ac;
    }

    function em(ab) {
      for (var ah in da) {
        if (ah.charAt(0) == 'u') {
          ab(ah);
        }
      }
    }

    function el() {
      var ac = Date.now() - bc;
      bc = Date.now();
      var ah = Math.min(ac / de.rAnimationDelay, 1);
      cf += ac;
      if ((ba.scale > 0.12 || de.cDisableAutoFoodHiding) && !de.cHideFood) {
        ar.visible = true;
        for (var af in ba.foodObjects) {
          db = ba.foodObjects[af];
          if (db.steps > 0) {
            db.animate(ah);
          };
          db.handleFood();
        }
      } else {
        ar.visible = false;
      };
      for (var af in ba.bucket) {
        db = ba.bucket[af];
        if (db.steps > 0) {
          db.animate(ah);
        };
        db.handle();
      };
      var bx = 0,
        am = 0,
        ab = 0,
        en = 0,
        db = null;
      for (var af in ba.myCells) {
        db = ba.myCells[af];
        if (db != null) {
          bx += db.x;
          am += db.y;
          en += db.size;
          ab++;
        }
      };
      if (ab != 0) {
        ba.centerX = bx / ab;
        ba.centerY = am / ab;
        ba.centerSteps = 0;
        if (de.cDisableAutoZoom) {
          ba.scale_base = 0.2 * Math.max(ax.height / 1080, ax.width / 1920);
        } else {
          ba.scale_base = Math.pow(Math.min(32 / en, 1), 0.4) * Math.max(ax.height / 1080, ax.width / 1920);
        }
      };
      if (ba.centerSteps > 0) {
        ba.centerX += (ba.centerX_ - ba.centerX) * ah;
        ba.centerY += (ba.centerY_ - ba.centerY) * ah;
      };
      var ad = ba.scale_base * ba.mouseZoom;
      ba.scale = (9 * ba.scale + ad) / 10;
      aq.scale.x = ba.scale;
      aq.scale.y = ba.scale;
      aq.pivot.x = ba.centerX;
      aq.pivot.y = ba.centerY;
      if (ba.isConnected() && bn.css('display') == 'none') {
        if (!ba.mouseFrozen) {
          var ag = aq.pivot.x - ak.stage.position.x / ba.scale + ba.mouseRawX * 1 / ba.scale;
          var ae = aq.pivot.y - ak.stage.position.y / ba.scale + ba.mouseRawY * 1 / ba.scale;
          ba.sendPacket(new bb.sendMouse(ag, ae));
        }
      };
      if (!de.cHideMinimap) {
        eo(ah);
      };
      if (de.cShowCoordinates) {
        ep();
      };
      ba.buffHolder.update();
      ak.renderer.render(ak.stage);
      cg++;
      if (cf >= 1000) {
        cx.playerFps.html(cg);
        var aw = Date.now();
        if (ba.serverData.resetType > 0 && ba.serverData.resetTime > 0) {
          cx.resetInfo.css('display', 'block');
          var cl = Math.max(0, Math.floor((ba.serverData.resetTime - aw) / 1000));
          cx.resetTime.html(er(cl));
        } else {
          cx.resetInfo.css('display', 'none');
        };
        if (ba.respawnCooldown > 0 && ba.respawnCooldown >= aw) {
          cx.respawnInfo.css('display', 'block');
          var cl = Math.max(0, Math.ceil((ba.respawnCooldown - aw) / 1000));
          cx.respawnCooldown.html(er(cl));
        } else {
          if (ba.respawnCooldown < 0) {
            cx.respawnInfo.css('display', 'block');
            cx.respawnCooldown.html('NEVER');
          } else {
            cx.respawnInfo.css('display', 'none');
          }
        };
        cf = 0;
        cg = 0;
      };
      ba.playerRegistry.handleUpdatedPlayers();
      requestAnimationFrame(el);
    }

    function es() {
      if (de.cShowBorder && ba.serverData.border.enabled) {
        if (aw != null) {
          aw.parent.removeChild(aw);
          aw.destroy();
          aw = null;
        };
        aw = new aj.Graphics();
        aw.lineStyle(da.rBorderSize, aj.utils.string2hex(tinycolor(da.uiGameBorderColor).toHexString()));
        aw.drawRect(ba.serverData.border.left, ba.serverData.border.top, ba.serverData.border.width, ba.serverData.border.height);
        ao.addChild(aw);
        aw.visible = true;
      } else {
        if (aw != null) {
          aw.parent.removeChild(aw);
          aw.destroy();
          aw = null;
        }
      }
    }

    function ep() {
      cx.minimapCoords.css({
        color: da.uiForegroundColor
      });
      cx.minimapCoords.html('X: ' + ba.centerX.toFixed(0) + ' Y: ' + ba.centerY.toFixed(0));
    }

    function eo(ab) {
      if (!ba.serverData.border.enabled) {
        return;
      };
      az.clearRect(0, 0, ay.width, ay.height);
      az.font = '12px Calibri';
      for (var ah = 0; ah < ba.party.length; ah++) {
        var ac = ba.party[ah];
        if (ac.state === et.ALIVE && ac.id != ba.playerId) {
          ev(az, ac.name, ac.x, ac.y, 4, ac.mmColor, true);;;
        }
      };
      ev(az, ba.name, ba.centerX, ba.centerY, 6, '#fefefe', false);
    }

    function ec() {
      ew();
    }

    function ed() {
      this.socket = null;
      this.currentServer = null;
      this.currentServerName = null;
      this.spectate = false;
      this.name = '';
      this.playerId = 0;
      this.bucket = {};
      this.foodObjects = {};
      this.myCells = {};
      this.playerRegistry = new ex();
      this.buffHolder = new ey();
      this.centerX = 0;
      this.centerY = 0;
      this.centerX_ = 0;
      this.centerY_ = 0;
      this.centerSteps = 0;
      this.scale = 0.5;
      this.scale_ = 0.5;
      this.scale_base = 0.5;
      this.mouseZoom = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.mouseRawX = 0;
      this.mouseRawY = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.mouseFrozen = false;
      this.party = [];
      this.partyIds = {};
      this.subPanelOverride = false;
      this.serverData = {
        hasSentSubPanel: false,
        border: {},
        maxCells: 16
      };
      this.score = 0;
      this.respawnCooldown = 0;
      this.customGameMap = null;
      this.accountListeners = {};
      this.clearStats();
      setInterval(this.sendPing.bind(this), 30000);
    }
    ed.prototype.clearStats = function() {
      this.stats = {
        name: 'An unnamed cell',
        alive: 0,
        eatenFood: 0,
        eatenEject: 0,
        eatenVirus: 0,
        eatenPlayer: 0,
        gainFood: 0,
        gainEject: 0,
        gainVirus: 0,
        gainPlayer: 0
      };
    };
    ed.prototype.play = function() {
      if (bl == null) {
        this.selfMsg('No server selected!');
        return;
      };
      this.name = $('#name-box').val();
      this.spectate = false;
      this.currentServerName = bl.name;
      $('#playerServer').html(this.currentServerName);
      ez();
      if (this.isConnected() && this.currentServer == bl.ip) {
        this.sendPacket(new bb.setName(this.name));
      } else {
        this.connect(bl.ip);
      };
      fa();
      dt(bn);
      ga('send', 'event', 'Game', 'webMenu', 'Play');
    };
    ed.prototype.spec = function() {
      if (bl == null) {
        this.selfMsg('No server selected!');
        return;
      };
      this.spectate = true;
      ez();
      if (this.isConnected() && this.currentServer == bl.ip) {
        this.sendPacket(new bb.sendSpectate());
      } else {
        this.connect(bl.ip);
      };
      fa();
      dt(bn);
      ga('send', 'event', 'Game', 'webMenu', 'Spectate');
    };
    ed.prototype.connect = function(ah) {
      if (this.socket != null) {
        this.socket.nextUrl = ah;
        this.disconnect(ah);
        return;
      };
      this.currentServer = ah;
      this.currentServerName = bl.name;
      this.selfMsg('Connecting to ' + this.currentServerName + '...');
      if (bl.ssl == 1) {
        this.socket = new WebSocket('wss://' + ah);
      } else {
        this.socket = new WebSocket('ws://' + ah);
      };
      this.socket.binaryType = 'arraybuffer';
      var ab = this;
      this.socket.onopen = this.onConnect.bind(this);
      this.socket.onmessage = this.onMessage.bind(this);
      this.socket.onclose = function(ah) {
        ab.reset();
        ab.selfMsg('You have been disconnected from the server. Reason: ' + (ah.reason === '' ? 'Unknown' : ah.reason));
        if (this.nextUrl != null) {
          ab.connect(this.nextUrl);
        }
      };
      this.socket.onerror = function(ac) {
        ab.reset();
        this.nextUrl = null;
        ab.selfMsg('Error connecting to server... Retrying every second.');
        setTimeout(function() {
          if (ab.isConnected() == false && ab.socket == null) {
            ab.connect(ah);
          }
        }, 1000);
      };
      document.body.classList.add('hide-captcha-badge');
    };
    ed.prototype.disconnect = function(ab) {
      if (this.socket != null) {
        this.socket.close();
      }
    };
    ed.prototype.clearBuckets = function() {
      for (var ab in this.bucket) {
        this.bucket[ab].onDelete();
        delete this.bucket[ab];
      };
      for (var ab in this.foodObjects) {
        this.foodObjects[ab].onDelete();
        delete this.foodObjects[ab];
      }
    };
    ed.prototype.reset = function() {
      this.clearBuckets();
      this.myCells = {};
      this.playerRegistry.clear();
      this.playerId = 0;
      this.score = 0;
      this.respawnCooldown = 0;
      this.customGameMap = null;
      this.currentServer = null;
      this.clearStats();
      this.clearParty();
      this.buffHolder.clearBuffs();
      this.serverData.hasSentSubPanel = false;
      this.serverData.resetType = 0;
      this.serverData.autosplits = false;
      if (this.socket != null) {
        this.socket = null;
      };
      $('#playerId').html(this.playerId);
      if (this.subPanelOverride) {
        this.subPanelOverride = false;
        fb();
      }
    };
    ed.prototype.handleKey = function(ah) {
      if (ah == df.kEjectMass) {
        bv = true;
        this.sendPacket(new bb.sendEjectMass(true));
      } else {
        if (ah == df.kSplit) {
          this.sendPacket(new bb.sendKey(17));
        } else {
          if (ah == df.kToggleSpec) {
            this.sendPacket(new bb.sendKey(18));
          } else {
            if (ah == df.kDoubleSplit) {
              this.sendPacket(new bb.sendKey(17));
              this.sendPacket(new bb.sendKey(17));
            } else {
              if (ah == df.kTripleSplit) {
                for (var ab = 0; ab < 3; ab++) {
                  this.sendPacket(new bb.sendKey(17));
                }
              } else {
                if (ah == df.kQuadSplit) {
                  for (var ab = 0; ab < 4; ab++) {
                    this.sendPacket(new bb.sendKey(17));
                  }
                } else {
                  if (ah == df.kHexaSplit) {
                    for (var ab = 0; ab < 6; ab++) {
                      this.sendPacket(new bb.sendKey(17));
                    }
                  } else {
                    if (ah == 38) {
                      this.mouseZoom *= 1.05;
                      this.mouseZoom = ba.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
                    } else {
                      if (ah == 40) {
                        this.mouseZoom *= 0.95;
                        this.mouseZoom = ba.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
                      } else {
                        if (ah == df.kFreezeMouse) {
                          this.mouseFrozen = !this.mouseFrozen;
                          if (this.mouseFrozen) {
                            cx.mouseFrozenDiv.css('display', 'block');
                          } else {
                            cx.mouseFrozenDiv.css('display', 'none');
                          }
                        } else {
                          if (ah == df.kContextMenu) {
                            fc();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    ed.prototype.isConnected = function() {
      if (this.socket == null) {
        return false;
      } else {
        return this.socket.readyState == 1;
      }
    };
    ed.prototype.sendPacket = function(ab) {
      if (this.isConnected()) {
        this.socket.send(ab);
      }
    };
    ed.prototype.onConnect = function() {
      cl = [];
      fd();
      this.sendPacket(new bb.connectionStart());
      this.sendPing();
      this.sendOptions();
      if (firebase.auth().currentUser !== null) {
        firebase.auth().currentUser.getIdToken(true).then(ab => {
          ba.sendPacket(new bb.sendAuthToken(ab));
        }).catch(aa => {
          return fe(aa, true);
        });
        return;
      } else {
        if (!this.spectate) {
          this.sendPacket(new bb.setName(this.name));
        } else {
          this.sendPacket(new bb.sendSpectate());
        }
      }
    };
    ed.prototype.sendPing = function() {
      if (this.isConnected()) {
        bh = +new Date();
        this.sendPacket(new bb.sendPing());
      }
    };
    ed.prototype.sendOptions = function() {
      if (this.isConnected()) {
        this.sendPacket(new bb.sendOptions());
      }
    };
    ed.prototype.selfMsg = function(ah) {
      var ab = document.createElement('td');
      var ac = document.createElement('span');
      ac.style.color = '#DDDD00';;
      ab.appendChild(ac);
      af(8, ab);
    };
    ed.prototype.selfMsgWithJoinCode = function(ag, ab) {
      var ac = document.createElement('td');
      var ae = document.createElement('span');
      ae.style.color = '#DDDD00';
      ae.innerHTML = '[System] ' + ag.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      ac.appendChild(ae);
      var ah = document.createElement('span');
      ah.style.color = '#DDDD00';
      ah.innerHTML = ab;
      ah.style.pointerEvents = 'all';
      ah.style.userSelect = 'all';
      ac.appendChild(ah);
      af(8, ac);
    };
    ed.prototype.clearParty = function(ab) {
      this.party = [];
      this.partyIds = {};
      this.partyLeader = -1;
      this.partyIndex = -1;
      $('#party-panel').css('display', 'none');
      if (cb.css('display') == 'block') {
        this.handleCustomGameLeave();
      };
      if (this.partyCode != null || bx != null) {
        this.partyCode = bx = null;
        window.history.pushState('page', '', ' ');
      }
    };
    ed.prototype.isPartyLeader = function() {
      return this.partyLeader == this.playerId;
    };
    ed.prototype.getServerMaxCells = function() {
      return this.serverData.maxCells + this.buffHolder.bonusMaxCells;
    };
    ed.prototype.onMessage = function(ah) {
      var ab = new DataView(ah.data);
      var ac = ab.getUint8(0);
      ab.offset = 1;
      switch (ac) {
        case 2:
          this.handleUpdate(ab);
          break;
        case 10:
          this.handlePosition(ab);
          break;
        case 21:
          this.handleStats(ab);
          break;
        case 22:
          this.showSubPanel(ab);
          break;
        case 23:
          this.updateSubPanel(ab);
          break;
        case 40:
          this.handleInvite(ab);
          break;
        case 41:
          this.handlePartyInfo(ab);
          break;
        case 45:
          this.handlePartyData(ab);
          break;
        case 43:
          this.handlePartyJoinCode(ab);
          break;
        case 49:
          this.handleLeaderboard(ab);
          break;
        case 50:
          this.handleLeaderboardCustom(ab);
          break;
        case 63:
          this.handleRespawnCooldown(ab);
          break;
        case 64:
          this.handleMapData(ab);
          break;
        case 65:
          this.handleClearNodes();
          break;
        case 66:
          this.handleUpdateBorder(ab);
          break;
        case 68:
          this.handleResetTime(ab);
          break;
        case 69:
          this.handleSpectators(ab);
          break;
        case 70:
          this.handleSystemMsg(ab);
          break;
        case 71:
          this.handlePing();
          break;
        case 72:
          this.handleChat(ab);
          break;
        case 73:
          this.handleWhisper(ab);
          break;
        case 74:
          this.handleEditMessage(ab);
          break;
        case 80:
          this.handleShowScrimmageMenu();
          break;
        case 81:
          this.handleQueueData(ab);
          break;
        case 82:
          this.handleQueueLeave(ab);
          break;
        case 83:
          this.handleMatchState(ab);
          break;
        case 90:
          this.handleScrimmageData(ab);
          break;
        case 91:
          this.handleCustomGameShow(ab);
          break;
        case 92:
          this.handleCustomGameUpdate(ab);
          break;
        case 93:
          this.handleCustomGameLeave();
          break;
        case 94:
          this.handleShowCustomGameLobbies(ab);
          break;
        case 100:
          this.handleAddBuff(ab);
          break;
        case 101:
          this.handleRemoveBuff(ab);
          break;
        case 102:
          this.handleClearBuffs(ab);
          break;
        case 103:
          this.handleAuthenticated(ab);
          break;
        case 104:
          this.handleProfile(ab);
          break;
      }
    };
    ed.prototype.handleUpdate = function(am) {
      var ab = am.getUint16(am.offset, true);
      am.offset += 2;
      while (ab > 0) {
        var af = am.getUint16(am.offset, true);
        am.offset += 2;
        ba.playerRegistry.remove(af);
        ab--;
      };
      ab = am.getUint16(am.offset, true);
      am.offset += 2;
      while (ab > 0) {
        var af = am.getUint16(am.offset, true);
        am.offset += 2;
        var ag = this.bucket[af] || this.foodObjects[af];
        if (ag != null) {
          if (ag.type == 6) {
            delete this.foodObjects[af];
          } else {
            delete this.bucket[af];
          };
          if (ag.playerId == this.playerId) {
            delete this.myCells[af];
            if (Object.keys(this.myCells).length == 0) {
              if (de.cAutoRespawn) {
                if ($('#main').css('display') == 'none') {
                  ba.play();
                }
              } else {
                if (bs.css('display') != 'block') {
                  ff(bn);
                };
                aiptag.cmd.display.push(function() {
                  aipDisplayTag.refresh('GOT_gota-io_336x280');
                });
              }
            }
          };
          ag.onDelete();
        };
        ab--;
      };
      while (true) {
        var af = am.getUint16(am.offset, true);
        am.offset += 2;
        if (af == 0) {
          break;
        };
        var ae = this.playerRegistry.getPlayer(af);
        var ac = false;
        if (ae == null) {
          ae = new fh(af);
        } else {
          ac = true;
        };
        ae.cellColor = (am.getUint8(am.offset++) << 16) + (am.getUint8(am.offset++) << 8) + am.getUint8(am.offset++);
        ae.name = fi(am);
        ae.setSkin(fj(am));
        ae.setFlags(am.getUint8(am.offset++));
        if ((ae.flags & 2) == 2) {
          ae.nameColor = '#' + (fk[am.getUint8(am.offset++) >> 4 & 15] + fk[am.getUint8(am.offset++) & 15]) + (fk[am.getUint8(am.offset++) >> 4 & 15] + fk[am.getUint8(am.offset++) & 15]) + (fk[am.getUint8(am.offset++) >> 4 & 15] + fk[am.getUint8(am.offset++) & 15]);
          ae.parseEffect(am.getUint8(am.offset++));
          ae.nameFont = am.getUint8(am.offset++);
        };
        if (!ac) {
          ba.playerRegistry.add(ae);
        } else {
          ba.playerRegistry.updatePlayer(ae);
        }
      };
      while (true) {
        var bx = am.getUint8(am.offset++);
        var ad = 0;
        if (bx == 0) {
          break;
        };
        while (true) {
          if (bx == 2 && ad == 0) {
            ad = am.getUint16(am.offset, true);
            am.offset += 2;
            if (ad == 0) {
              break;
            }
          };
          var af = am.getUint16(am.offset, true);
          am.offset += 2;
          if (af == 0) {
            if (bx == 2) {
              ad = 0;
              continue;
            } else {
              break;
            }
          };
          var ag = new fl(af);
          ag.setType(bx);
          ag.setX(am.getInt16(am.offset, true));
          ag.setY(am.getInt16(am.offset + 2, true));
          am.offset += 4;
          switch (bx) {
            case 6:
              ;
              break;
            case 1:
              ag.setSize(am.getUint16(am.offset, true));
              am.offset += 2;;
              var ah = am.getUint8(am.offset++);;;
              break;
            case 2:
              ag.setSize(am.getUint16(am.offset, true));
              am.offset += 2;;
              break;
            case 3:
              ag.setSize(am.getUint16(am.offset, true));
              am.offset += 2;
              break;
            case 4:
              ag.setSize(am.getUint16(am.offset, true));
              am.offset += 2;
              break;
            case 5:
              ag.setSize(am.getUint16(am.offset, true));
              am.offset += 2;;
              break;
          };
          ag.onCreate(this);
        }
      };
      while (true) {
        var bx = am.getUint8(am.offset++);
        if (bx == 0) {
          break;
        };
        while (true) {
          var af = am.getUint16(am.offset, true);
          am.offset += 2;
          if (af == 0) {
            break;
          };
          var db = am.getInt16(am.offset, true);
          var cl = am.getInt16(am.offset + 2, true);
          am.offset += 4;
          var ag;
          if (bx == 6) {
            ag = this.foodObjects[af];
          } else {
            ag = this.bucket[af];
          };
          if (ag == null) {
            ag = new fl(af);
            ag.setType(bx);
            ag.setSize(10);
            ag.setX(db);
            ag.setY(cl);
            ag.onCreate(this);
          } else {
            ag.updateX(db);
            ag.updateY(cl);
          };
          switch (bx) {
            case 2:
              ;
              am.offset += 2;
              break;
            case 3:
              ;
              am.offset += 2;
              break;
            case 4:
              ;
              am.offset += 2;
              break;
          };;
        }
      };
      this.sortCells();
    };
    ed.prototype.handlePosition = function(ab) {
      this.centerX_ = ab.getFloat32(ab.offset, true);
      ab.offset += 4;
      this.centerY_ = ab.getFloat32(ab.offset, true);
      ab.offset += 4;
      this.centerSteps = 30;
      if (!de.cDisableAutoZoom) {
        this.scale_base = ab.getFloat32(ab.offset, true);
      }
    };
    ed.prototype.handleRespawnCooldown = function(ah) {
      var ab = ah.getFloat64(ah.offset, true);
      this.respawnCooldown = ab;
    };
    ed.prototype.handleMapData = function(ab) {
      this.playerId = ab.getUint16(ab.offset, true);
      ab.offset += 3;
      this.handleUpdateBorder(ab);
      this.serverData.maxCells = ab.getUint16(ab.offset, true);
      ab.offset += 2;
      fj(ab);
      this.serverData.autosplits = ab.getUint8(ab.offset++);
      $('#playerId').html(ba.playerId);
      this.updateCellCounter(0, true);
      if (bx != null) {
        ba.sendPacket(new bb.sendPartyJoin(bx));
      };
      bs.css('display', 'none');
      $('#scrimmage-btn-leave').css('display', 'none');
    };
    ed.prototype.handleUpdateBorder = function(ab) {
      this.serverData.border = {};
      this.serverData.border.left = ab.getInt16(ab.offset, true);
      this.serverData.border.top = ab.getInt16(ab.offset + 2, true);
      this.serverData.border.right = ab.getInt16(ab.offset + 4, true);
      this.serverData.border.bottom = ab.getInt16(ab.offset + 6, true);
      ab.offset += 8;
      this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
      this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
      this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0;
      es();
    };
    ed.prototype.handleResetTime = function(ac) {
      var ah = ac.getUint8(ac.offset++);
      var ab = ac.getFloat64(ac.offset, true);
      this.serverData.resetType = ah;
      this.serverData.resetTime = ab;
    };
    ed.prototype.handleSpectators = function(ab) {
      this.spectators = ab.getUint16(ab.offset, true);
      this.updateSpectators();
    };
    ed.prototype.handleClearNodes = function(ab) {
      this.clearBuckets();
    };
    ed.prototype.handleLeaderboard = function(bx) {
      var ag = document.getElementById('leaderboard-canvas');
      var ah = ag.getContext('2d');
      bq.text('Leaderboard');
      var ab = bx.getUint32(bx.offset, true);
      bx.offset += 4;;;
      ah.font = '16px Calibri';
      var ad = 20;
      for (var ac = 0; ac < ab; ac++) {
        var af = bx.getUint16(bx.offset, true);
        bx.offset += 2;
        var ae = fi(bx) || 'An unnamed cell';
        if (af == this.playerId) {
          ah.fillStyle = da.uiLeaderboardHighlightSelf;
        } else {
          if (this.partyIds[af] != null) {
            ah.fillStyle = da.uiLeaderboardHighlightParty;
          } else {
            ah.fillStyle = da.uiForegroundColor;
          }
        };
        ah.fillText(ac + 1 + '. ' + ae, 10, ad);
        ad += 20;
      }
    };
    ed.prototype.handleLeaderboardCustom = function(am) {
      var ag = document.getElementById('leaderboard-canvas');
      var ac = ag.getContext('2d');
      bq.html('Leaderboard');
      var ab = am.getUint16(am.offset, true);
      var ah = am.getUint8(am.offset + 2, true);
      var bx = am.getUint8(am.offset + 3, true);
      am.offset += 4;;;;
      var ad = 20;
      for (var af = 0; af < ab; af++) {
        var ae = fj(am);
        if (af == ah) {
          ;
        } else {
          ;
        };
        ac.fillText(ae, 5, ad);
        ad += 20;
      }
    };
    ed.prototype.handlePing = function() {
      var ab = +new Date() - bh;
      if (!de.cColoredPing) {
        if (ab < 100) {
          $('#playerPing').css({
            color: da.uiGameColorSuccess
          });
        } else {
          if (ab < 200) {
            $('#playerPing').css({
              color: da.uiGameColorWarning
            });
          } else {
            $('#playerPing').css({
              color: da.uiGameColorError
            });
          }
        }
      } else {
        $('#playerPing').css({
          color: da.uiForegroundColor
        });
      };
      $('#playerPing').html(ab + 'ms');
    };
    ed.prototype.handleChat = function(fm) {
      var ab = fm.getUint8(fm.offset++);
      var en = 'rgb(' + fm.getUint8(fm.offset++) + ',' + fm.getUint8(fm.offset++) + ',' + fm.getUint8(fm.offset++) + ')';
      var ac = fm.getUint8(fm.offset++);
      var ao = fm.getUint16(fm.offset, true);
      fm.offset += 2;
      if (cl.includes(ao)) {
        return;
      };
      var fn = fi(fm);
      fm.getUint8(fm.offset++);
      var db = fi(fm).replace(/</g, '&lt;').replace(/>/g, '&gt;') || 'An unnamed cell';
      var bx = fi(fm).replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var ag = 1;
      var am = fm.offset < fm.byteLength ? fm.getBigInt64(fm.offset, true) : 0;
      var ah;
      switch (ab) {
        case 1:
          ah = 'Party';
          ag = 2;
          break;
        case 2:
          ah = 'Admin';
          ag = 16;
          break;
        default:
          ah = 'All';
          break;
      };
      if (fn.length > 0) {
        (ah += ' - ' + fn).replace(/</g, '&lt;').replace(/>/g, '&gt;');
      };
      var ad = document.createElement('td');
      if (am != 0) {
        ad.dataset.msgid = am;
      };
      var fo = document.createElement('span');
      fo.innerHTML = '[' + ah + '] ';
      ad.appendChild(fo);
      var aw = document.createElement('span');
      aw.innerText = db;
      aw.dataset.playerId = ao;
      aw.style.color = en;
      aw.className = 'chat-name';
      aw.oncontextmenu = fp;
      ad.appendChild(aw);
      var ae = document.createElement('span');
      ae.innerHTML = ': ';
      ad.appendChild(ae);
      var ey = document.createElement('span');
      ey.className = 'chat-content';
      ey.style.color = fq[ac];
      ey.innerHTML = fr(bx);
      ad.appendChild(ey);
      af(ag, ad);
    };
    ed.prototype.handleWhisper = function(fo) {
      var am = fi(fo).replace(/</g, '&lt;').replace(/>/g, '&gt;') || 'An unnamed cell';
      var en = fo.getUint16(fo.offset, true);
      fo.offset += 2;
      if (cl.includes(en)) {
        return;
      };
      var db = 'rgb(' + fo.getUint8(fo.offset++) + ',' + fo.getUint8(fo.offset++) + ',' + fo.getUint8(fo.offset++) + ')';
      var ag = fi(fo).replace(/</g, '&lt;').replace(/>/g, '&gt;') || 'An unnamed cell';
      var ad = fo.getUint16(fo.offset, true);
      fo.offset += 2;
      var ae = 'rgb(' + fo.getUint8(fo.offset++) + ',' + fo.getUint8(fo.offset++) + ',' + fo.getUint8(fo.offset++) + ')';
      var ac = fi(fo).replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var ah = document.createElement('td');
      var aw = document.createElement('span');
      aw.innerText = am;
      aw.dataset.playerId = en;
      aw.style.color = db;
      aw.className = 'chat-name';
      aw.oncontextmenu = fp;
      ah.appendChild(aw);
      var ab = document.createElement('span');
      ab.innerHTML = ' > ';
      ah.appendChild(ab);
      var bx = document.createElement('span');
      bx.innerText = ag;
      bx.dataset.playerId = ad;
      bx.style.color = ae;
      bx.className = 'chat-name';
      bx.oncontextmenu = fp;
      ah.appendChild(bx);
      var ao = document.createElement('span');
      ao.innerHTML = ': ' + fr(ac);
      ah.appendChild(ao);
      af(4, ah);
    };
    ed.prototype.handleEditMessage = function(ac) {
      var ah = ac.getBigInt64(ac.offset, true);;
      var ab = fi(ac).replace(/</g, '&lt;').replace(/>/g, '&gt;');
      if (ab.length > 0) {
        $('.chat-table td[data-msgid=\'' + ah + '\'] .chat-content').html(fr(ab));
      } else {
        $('.chat-table td[data-msgid=\'' + ah + '\']').closest('tr').remove();
      }
    };
    ed.prototype.handleSystemMsg = function(ah) {
      var ab = fi(ah);
      this.selfMsg(ab);
    };
    ed.prototype.handleAuthenticated = function(ah) {
      var ab = ah.getUint8(1);
      switch (ab) {
        case 0:
          break;
        case 1:
          this.selfMsg('Invalid authentication token! Please logout and try again!');
          break;
      };
      if (!this.spectate) {
        this.sendPacket(new bb.setName(this.name));
      } else {
        this.sendPacket(new bb.sendSpectate());
      }
    };
    ed.prototype.handleProfile = function(ac) {
      var ab = fj(ac);
      var ah = JSON.parse(ab);
      fs(ah);
    };
    ed.prototype.handleInvite = function(ac) {
      if (de.cAutoDecline) {
        ba.sendPacket(new bb.sendInviteResponse(false));
      } else {
        var ah = fi(ac).replace(/</g, '&lt;').replace(/>/g, '&gt;');
        var ab = document.getElementById('popup-party-text');
        ab.innerText = ah + ' has invited you to a party.';
        ff($('#popup-party'));
      }
    };
    ed.prototype.handlePartyInfo = function(am) {
      var ag = {
        color: ft[ag.id % ft.length],
        color: (am.getUint8(am.offset++) << 16) + (am.getUint8(am.offset++) << 8) + am.getUint8(am.offset++),
        skin: (ah & 127) - 1,
        rainbow: (ah & 128) == 128,
        playerId: ad,
        buff: am.getUint8(am.offset++),
        size_: am.getUint16(am.offset, true),
        size_: am.getUint16(am.offset, true),
        size_: am.getUint16(am.offset, true),
        steps: 30,
        width: 200,
        height: 20 * ab + 5,
        width: 200,
        height: 20 * ab + 5,
        cache: ab.measureText(ah + 1 + '. ' + ag.name).width,
        scoreText: ag.score.toLocaleString(),
        scoreText: 'DEAD',
        scoreText: 'SPEC',
        offset: 2,
        offset: 2,
        offset: 2,
        offset: 4,
        offset: 4,
        offset: 2,
        offset: 2,
        texture: fu.getNumber(ab).texture,
        src: ao.avatar,
        alt: ao.username,
        af: ah[af]
      };
      var ad = [];
      var ae = -1;
      var ab = am.getUint16(am.offset, true);
      am.offset += 2;
      for (var ac = 0; ac < ab; ac++) {
        var af = {
          id: am.getUint16(am.offset, true),
          isLeader: true,
          isLeader: false,
          name: fi(am) || 'An unnamed cell',
          x: 0,
          y: 0,
          x_: 0,
          y_: 0,
          score: 0,
          cache: -1,
          team: 0,
          state: et.UNKNOWN,
          x: bx.x,
          y: bx.y,
          x_: bx.x_,
          y_: bx.y_,
          state: bx.state,
          score: bx.score,
          cache: bx.cache,
          mmColor: bx.mmColor,
          mmColor: fv[af.id % fv.length]
        };
        var ah = am.getUint8(am.offset++);;
        ag[af.id] = ac;
        am.offset += 2;
        if (ah == 1) {
          ae = af.id;;
        } else {
          ;
        };;;;;;;;;;
        if (this.partyIds[af.id] != null) {
          var bx = this.party[this.partyIds[af.id]];;;;;;;;;
        } else {
          ;
        };
        ad.push(af);
      };
      this.party = ad;
      this.partyIds = ag;
      if (this.partyLeader != ae) {
        this.partyLeader = ae;
        if (cb.css('display') == 'block') {
          ScrimmageHelper.checkLeader();
        }
      };
      if (ab > 0) {
        this.drawParty();
      } else {
        this.clearParty();
      }
    };
    ed.prototype.handlePartyData = function(af) {
      var ab = af.getUint16(af.offset, true);
      af.offset += 2;
      if (ab != this.party.length) {
        return;
      };
      for (var ah = 0; ah < ab; ah++) {
        var ac = this.party[ah];;
        if (ac.state === et.ALIVE) {
          ;;;
          af.offset += 8;
        }
      };
      this.drawParty();
    };
    ed.prototype.handlePartyJoinCode = function(ac) {
      var ab = fj(ac);
      this.partyCode = fj(ac);
      if (this.partyCode.length != 0) {
        this.selfMsgWithJoinCode(ab, this.partyCode);
        $('#popup-party-code-content input').val(this.partyCode);
        $('#popup-party-code').show();
        var ah = '#' + this.currentServerName + '&' + this.partyCode;
        window.history.pushState('page', '', ah);
      } else {
        this.selfMsg(ab);
        this.partyCode = null;
        window.history.pushState('page', '', ' ');
      }
    };
    ed.prototype.handleStats = function(ac) {
      var ab = ac.getUint16(ac.offset, true);;
      this.stats.name = fi(ac) || 'An unnamed cell';
      this.stats.alive += ac.getUint32(ac.offset, true);;
      this.stats.eatenFood += ac.getUint32(ac.offset, true);;
      this.stats.eatenEject += ac.getUint32(ac.offset, true);;
      this.stats.eatenVirus += ac.getUint32(ac.offset, true);;
      this.stats.eatenPlayer += ac.getUint32(ac.offset, true);;
      this.stats.gainFood += ac.getUint32(ac.offset, true);;
      this.stats.gainEject += ac.getUint32(ac.offset, true);;
      this.stats.gainVirus += ac.getUint32(ac.offset, true);;
      this.stats.gainPlayer += ac.getUint32(ac.offset, true);;
      var ah = $('#main-stats');
      ah.empty();
      ah.append('<span>Name: ' + this.stats.name + ' (' + ab + ')</span><br>');
      ah.append('<span>Alive: ' + er(this.stats.alive) + '</span><br>');
      ah.append('<span>Food eaten: ' + this.stats.eatenFood + ' (' + this.stats.gainFood + ')</span><br>');
      ah.append('<span>Ejected mass eaten: ' + this.stats.eatenEject + ' (' + this.stats.gainEject + ')</span><br>');
      ah.append('<span>Viruses eaten: ' + this.stats.eatenVirus + ' (' + this.stats.gainVirus + ')</span><br>');
      ah.append('<span>Player cells eaten: ' + this.stats.eatenPlayer + ' (' + this.stats.gainPlayer + ')</span><br>');
    };
    ed.prototype.showSubPanel = function(ah) {
      var ab = ah.getUint8(ah.offset++) == 1;
      this.subPanelOverride = ab;
      fb();
      if (ab) {
        if (!this.serverData.hasSentSubPanel) {
          fw();
          this.serverData.hasSentSubPanel = true;
        };
        document.body.classList.add('hide-captcha-badge');
      }
    };
    ed.prototype.updateSubPanel = function(ab) {
      if (ch) {
        fx(ch.uid);
      }
    };
    ed.prototype.updateSpectators = function() {
      cx.spectatorCount.html(this.spectators);
    };
    ed.prototype.handleAddBuff = function(af) {
      var ab = af.getUint8(af.offset++);
      var ac = af.getUint8(af.offset++);
      var ah = af.getFloat64(af.offset, true);
      af.offset += 8;
      this.buffHolder.onAddBuff(ab, ac, ah);
    };
    ed.prototype.handleRemoveBuff = function(ah) {
      var ab = ah.getUint8(ah.offset++);
      this.buffHolder.onRemoveBuff(ab);
    };
    ed.prototype.handleClearBuffs = function(ah) {
      var ab = ah.getUint8(ah.offset++) == 1 ? true : false;
      this.buffHolder.clearBuffs(ab);
    };
    ed.prototype.sortCells = function() {
      au.children.sort(function(ab, ah) {
        return ab.parentCell.size - ah.parentCell.size;
      });
      this.updateScorePanel();
    };
    ed.prototype.updateScorePanel = function() {
      var ah = 0;
      var ab = 0;
      for (var ac in this.myCells) {
        var af = this.myCells[ac];
        ah += af.getRealMass();
        ab++;
      };
      if (ah > this.score) {
        this.score = ah;
        cx.playerScore.html(this.score.toLocaleString());
      };
      this.updateCellCounter(ab);
    };
    ed.prototype.updateCellCounter = function(ab, ah) {
      if (cx.playerCellCount != ab || ah) {
        ;
        cx.playerCells.html(ab + '/' + this.getServerMaxCells());
        if (!de.cColoredCellCount) {
          var ac = ab / this.getServerMaxCells();
          if (ac >= 1) {
            cx.playerCells.css({
              color: da.uiGameColorError
            });
          } else {
            if (ac >= 0.5) {
              cx.playerCells.css({
                color: da.uiGameColorWarning
              });
            } else {
              cx.playerCells.css({
                color: da.uiGameColorSuccess
              });
            }
          }
        } else {
          cx.playerCells.css({
            color: da.uiForegroundColor
          });
        }
      }
    };
    ed.prototype.drawParty = function() {
      if (this.party.length == 0) {
        return;
      };
      if (de.cHidePartyPanel) {
        cx.partyPanel.css('display', 'none');
      } else {
        if (cx.partyPanel.css('display') == 'none' && bp.css('display') != 'none') {
          cx.partyPanel.css('display', 'block');
        }
      };
      var bx = document.getElementById('party-canvas');
      var ab = bx.getContext('2d');
      ab.font = '16px Calibri';
      var ac = 0;
      var af = 0;
      var db = 0;
      for (var ah = 0; ah < this.party.length; ah++) {
        var ag = this.party[ah];
        if (ag.cache == -1) {
          ;
        };
        if (ag.cache > ac) {
          ac = ag.cache;
        };
        if (ag.state === et.ALIVE || ag.state === et.UNKNOWN) {
          ;
          db += ag.score;
        } else {
          if (ag.state === et.DEAD) {
            ;
          } else {
            if (ag.state === et.SPECTATE) {
              ;
            }
          }
        };
        var am = ab.measureText(ag.scoreText).width;
        if (am > af) {
          af = am;
        }
      };
      var cl = db.toLocaleString();
      af = Math.max(af, ab.measureText(cl).width);
      bx.width = 15 + ac + 50 + af;
      bx.height = 20 * this.party.length + 5 + (this.party.length > 1 ? 20 : 0);
      ab.font = '16px Calibri';
      var ad = 20;
      var ae = 5 + ac + 50;
      for (var ah = 0; ah < this.party.length; ah++) {
        var ag = this.party[ah];
        ab.fillStyle = ag.isLeader ? da.uiPartyLeaderColor : da.uiForegroundColor;
        ab.fillText(ah + 1 + '. ' + ag.name, 5, ad);
        ab.fillText(ag.scoreText, ae, ad);
        ad += 20;
      };
      if (this.party.length > 1) {
        ab.fillStyle = da.uiForegroundColor;
        ab.fillText('Total:', 5, ad);
        ab.fillText(cl, ae, ad);
      }
    };
    ed.prototype.handleShowScrimmageMenu = function() {
      bn.stop(true, false);
      bn.css('display', 'none');
      bs.css('display', 'block');
      $('#scrimmage-btn-leave').css('display', 'none');
      ba.serverData.border.enabled = false;
    };
    ed.prototype.handleQueueData = function(ad) {
      var ac = fj(ad);
      var ae = ad.getUint32(ad.offset, true);
      ad.offset += 4;
      var ag = ad.offset < ad.byteLength ? ad.getUint8(ad.offset) : -1;
      var ah = document.getElementById('leaderboard-canvas');
      var ab = ah.getContext('2d');
      bq.html('Queue');
      ah.width = 200;
      ah.height = 20 * (2 + (ag != -1 ? 1 : 0)) + 5;
      ab.font = '16px Calibri';
      var af = 20;
      ab.fillStyle = da.uiForegroundColor;
      ab.fillText('Mode: ' + ac, 5, af);
      af += 20;
      ab.fillText('Time: ' + er(ae), 5, af);
      if (ag != -1) {
        af += 20;
        ab.fillText('Queued players: ' + ag, 5, af);
      }
    };
    ed.prototype.handleQueueLeave = function(ac) {
      var ah = fj(ac);
      var ab = document.getElementById('leaderboard-canvas');
      ab.width = 0;
      ab.height = 0;
      this.selfMsg('You have left the queue for [' + ah + ']');
    };
    ed.prototype.handleMatchState = function(ah) {
      var ab = ah.byteLength == 1 ? 0 : ah.getUint8(ah.offset++);
      if (ab == 0) {
        this.selfMsg('A match has been found. Good luck and have fun!');
        fy();
      } else {
        if (ab == 1) {
          $('#scrimmage-btn-leave').css('display', 'block');
        }
      }
    };
    ed.prototype.handleScrimmageData = function(en) {
      var ab = en.getUint8(en.offset++);
      var am = $('#scrimmage-mode-select');
      var bx = $('#scrimmage-mode-info');
      var cl = parseInt(am.val());
      am.empty();
      bx.empty();
      var ah = {
        ag: true
      };
      while (ab > 0) {
        var ag = en.getUint8(en.offset++);
        var db = fj(en);
        var ae = fj(en);
        var ac = document.createElement('option');;;
        am.append(ac);
        ac = document.createElement('div');;;
        ac.style.display = 'none';
        bx.append(ac);;
        ab--;
      };
      bz = {
        modes: {},
        sizes: {},
        maps: []
      };
      if (en.byteLength - 1 > en.offset) {
        ab = en.getUint8(en.offset++);
        while (ab > 0) {
          var ag = en.getUint8(en.offset++);
          var db = fj(en);
          bz.modes[ag] = {
            id: ag,
            name: db
          };
          ab--;
        };
        ab = en.getUint8(en.offset++);
        while (ab > 0) {
          var ag = en.getUint8(en.offset++);
          var db = fj(en);
          bz.sizes[ag] = {
            id: ag,
            name: db
          };
          ab--;
        };
        ab = en.getUint8(en.offset++);
        while (ab > 0) {
          var db = fj(en);
          var ad = {
            name: db,
            startmass: 0,
            teams: 0,
            modes: [],
            sizes: []
          };
          var af = en.getUint8(en.offset++);
          while (af > 0) {
            ad.modes.push(en.getUint8(en.offset++));
            af--;
          };
          var af = en.getUint8(en.offset++);
          while (af > 0) {
            ad.sizes.push(en.getUint8(en.offset++));
            af--;
          };
          ad.startmass = en.getUint16(en.offset, true);
          en.offset += 2;
          ad.respawnDelay = en.getInt16(en.offset, true);
          en.offset += 2;
          ad.teams = en.getUint8(en.offset++);
          bz.maps.push(ad);
          ab--;
        }
      };
      $('#scrimmage-custom-btn-container').css('display', bz.maps.length == 0 ? 'none' : 'block');
      $('#scrimmage-map').empty();
      for (var af = 0; af < bz.maps.length; af++) {
        $('#scrimmage-map').append('<option value=\'' + af + '\'>' + bz.maps[af].name + '</option>');
      };
      if (ah[cl] != null) {
        am.val(cl);
        am.trigger('change');
      } else {
        am.prop('selectedIndex', 0);
        am.trigger('change');
      }
    };
    ed.prototype.handleCustomGameUpdate = function(ag) {
      var ac = ag.getUint8(ag.offset++);
      switch (ac) {
        case 0:
          ScrimmageHelper.updateMap(ag.getUint8(ag.offset++));
          break;
        case 1:
          ScrimmageHelper.updateMode(ag.getUint8(ag.offset++));
          break;
        case 2:
          ScrimmageHelper.updateSize(ag.getUint8(ag.offset++));
          break;
        case 3:
          ScrimmageHelper.updateStartMass(ag.getUint16(ag.offset, true));;
          break;
        case 4:
          ScrimmageHelper.updateLock(ag.getUint8(ag.offset++) === 1 ? true : false);
          break;
        case 5:
          var ah = ag.getUint8(ag.offset++);
          var af = ag.getUint8(ag.offset++);
          ba.party[ah].team = af;
          ScrimmageHelper.updatePlayerById(ah);
          break;
        case 6:
          var ab = ag.getUint8(ag.offset++);
          var ah = 0;
          while (ab > 0) {
            ba.party[ah].team = ag.getUint8(ag.offset++);
            ab--;
            ah++;
          };
          ScrimmageHelper.updatePlayers();
          break;
        case 7:
          ScrimmageHelper.updateVirusDensity(ag.getUint16(ag.offset, true));;
          break;
        case 11:
          ScrimmageHelper.updateRespawnDelay(ag.getInt16(ag.offset, true));;
          break;
        case 12:
          ScrimmageHelper.updateAutoSplit(ag.getUint8(ag.offset++) === 1 ? true : false);
          break;
        case 8:
          ScrimmageHelper.updatePublic(ag.getUint8(ag.offset++) === 1 ? true : false);
          break;
        case 9:
          ScrimmageHelper.updatePassword(ag.getUint8(ag.offset++) === 1 ? true : false);
          break;
        case 10:
          ScrimmageHelper.updateName(fi(ag));
          break;
      }
    };
    ed.prototype.handleCustomGameShow = function(aw) {
      $('.scrimmage-full').css('display', 'none');
      $('#scrimmage-custom').css('display', 'block');
      var ad = fi(aw);
      var ag = aw.getUint8(aw.offset++);
      var ae = aw.getUint8(aw.offset++);
      var cl = aw.getUint8(aw.offset++);
      var en = aw.getUint16(aw.offset, true);
      aw.offset += 2;
      var ao = aw.getUint16(aw.offset, true);
      aw.offset += 2;
      var db = aw.getInt16(aw.offset, true);
      aw.offset += 2;
      var ah = aw.getUint8(aw.offset++) === 1 ? true : false;
      var af = aw.getUint8(aw.offset++) === 1 ? true : false;
      var am = aw.getUint8(aw.offset++) === 1 ? true : false;
      var bx = aw.getUint8(aw.offset++) === 1 ? true : false;
      var ab = aw.getUint8(aw.offset++);
      var ac = 0;
      while (ab > 0) {
        ba.party[ac].team = aw.getUint8(aw.offset++);
        ab--;
        ac++;
      };
      ScrimmageHelper.updateName(ad);
      ScrimmageHelper.updateMap(ag);
      ScrimmageHelper.updateMode(ae);
      ScrimmageHelper.updateSize(cl);
      ScrimmageHelper.updateStartMass(en);
      ScrimmageHelper.updateVirusDensity(ao);
      ScrimmageHelper.updateLock(af);
      ScrimmageHelper.updateRespawnDelay(db);
      ScrimmageHelper.updateAutoSplit(ah);
      ScrimmageHelper.updatePublic(am);
      ScrimmageHelper.updatePassword(bx);
      ScrimmageHelper.updatePlayers();
      ScrimmageHelper.checkLeader();
    };
    ed.prototype.handleCustomGameLeave = function() {
      $('.scrimmage-full').css('display', 'none');
      $('#scrimmage-menu').css('display', 'block');
    };
    ed.prototype.handleShowCustomGameLobbies = function(ag) {
      $('.scrimmage-full').css('display', 'none');
      $('#scrimmage-lobbies').css('display', 'block');
      ca = {};
      var af = $('#scrimmage-lobbies-tbody');
      af.empty();
      while (true) {
        var ac = ag.getUint32(ag.offset, true);;
        if (ac == 0) {
          break;
        };
        var ab = {
          id: ac,
          name: fi(ag),
          leaderId: ag.getUint32(ag.offset),
          leaderName: fi(ag) || 'An unnamed cell',
          map: ag.getUint8(ag.offset++),
          mode: ag.getUint8(ag.offset++),
          size: ag.getUint16(ag.offset, true),
          maxSize: ag.getUint16(ag.offset, true),
          hasPasscode: ag.getUint8(ag.offset++) == 1 ? true : false
        };;;;;;;;;;;;;
        ca[ab.id] = ab;
        var ah = ab.hasPasscode ? '<div class=\'scrimmage-lock\'></div>' : '';
        af.append('<tr partyId=\'' + ab.id + '\'><td><span>' + ah + ab.name.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span></td><td><span>' + ab.leaderName.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span></td><td><span>' + bz.maps[ab.map].name + '</span></td><td><span>' + bz.modes[ab.mode].name + '</span></td><td><span>' + ab.size + '/' + ab.maxSize + '</span></td></tr>');
      };
      $('#scrimmage-lobbies-tbody tr').on('click', function() {
        $('.custom-game-selected').removeClass('custom-game-selected');
        bm = $(this).attr('partyId');
        $(this).addClass('custom-game-selected');
      });
    };
    ScrimmageHelper = {
      updateName: function(ab) {
        $('#scrimmage-name').text(ab);
      },
      updateMap: function(ah) {
        $('#scrimmage-map option[value=\'' + ah + '\']').prop('selected', true);
        var ac = bz.maps[ah];
        $('#scrimmage-mapmode').empty();
        for (var ab = 0; ab < ac.modes.length; ab++) {
          var af = bz.modes[ac.modes[ab]];
          $('#scrimmage-mapmode').append('<option value=\'' + ab + '\'>' + af.name + '</option>');
        };
        $('#scrimmage-mapsize').empty();
        for (var ab = 0; ab < ac.sizes.length; ab++) {
          var ag = bz.sizes[ac.sizes[ab]];
          $('#scrimmage-mapsize').append('<option value=\'' + ab + '\'>' + ag.name + '</option>');
        };
        ScrimmageHelper.updateMode(0);
        ScrimmageHelper.updateSize(0);
        ScrimmageHelper.updateStartMass(ac.startmass);
        $('#scrimmage-startmass').attr('placeholder', ac.startmass);
        ScrimmageHelper.updateRespawnDelay(ac.respawnDelay);
        $('#scrimmage-map').attr('data', ah);
        ba.customGameMap = ac;
      },
      updateMode: function(ab) {
        $('#scrimmage-mapmode option[value=\'' + ab + '\']').prop('selected', true);
        $('#scrimmage-mapmode').attr('data', ab);
      },
      updateSize: function(ab) {
        $('#scrimmage-mapsize option[value=\'' + ab + '\']').prop('selected', true);
        $('#scrimmage-mapsize').attr('data', ab);
      },
      updateStartMass: function(ab) {
        $('#scrimmage-startmass').val(ab);
        $('#scrimmage-startmass').attr('data', ab);
      },
      updateVirusDensity: function(ab) {
        $('#scrimmage-virusDensity').val(ab);
        $('#scrimmage-virusDensity').attr('data', ab);
      },
      updateRespawnDelay: function(ab) {
        $('#scrimmage-respawnDelay').val(ab);
        $('#scrimmage-respawnDelay').attr('data', ab);
      },
      updateAutoSplit: function(ab) {
        $('#scrimmage-autoSplit').prop('checked', ab);
      },
      updatePublic: function(ab) {
        $('#scrimmage-public').prop('checked', ab);
      },
      updatePassword: function(ab) {
        $('#scrimmage-password').prop('checked', ab);
      },
      updateLock: function(ab) {
        $('#scrimmage-lockteams').prop('checked', ab);
        ScrimmageHelper.checkLock();
      },
      checkLock: function() {
        if ($('#scrimmage-lockteams').prop('checked') && !ba.isPartyLeader()) {
          $('#cgp-' + ba.partyIndex).attr('disabled', 'disabled');
        } else {
          $('#cgp-' + ba.partyIndex).removeAttr('disabled');
        }
      },
      checkLeader: function() {
        if (ba.isPartyLeader()) {
          $('.custom-game').removeAttr('disabled');
        } else {
          $('.custom-game').attr('disabled', 'disabled');
          ScrimmageHelper.checkLock();
        }
      },
      updatePlayerById: function(ab) {
        var ah = ba.party[ab];
        $('#cgp-' + ab + ' option[value=\'' + ah.team + '\']').prop('selected', true);
        $('#cgp-name-' + ab).text(ah.name);
        $('#cgp-name-' + ab).css('color', fz[ah.team]);
      },
      updatePlayers: function() {
        $('#scrimmage-custom-players').empty();
        for (var ab = 0; ab < ba.party.length; ab++) {
          var ah = ba.party[ab];
          if (ah.id == ba.playerId) {
            ba.partyIndex = ab;
          };
          $('#scrimmage-custom-players').append('<tr><td><span id=\'cgp-name-' + ab + '\'>' + ah.name + '</span></td>' + ScrimmageHelper.getTeamOptions(ab, ba.customGameMap.teams) + '</tr>');
          $('#cgp-' + ab + ' option[value=\'' + ah.team + '\']').prop('selected', true);
          $('#cgp-name-' + ab).css('color', fz[ah.team]);
          $('#cgp-' + ab).on('change', function(ah) {
            var ac = parseInt($(this).attr('id').match('\\d+')[0]);
            var af = $(this).find('option:selected').val();
            $('#cgp-' + ab + ' option[value=\'' + $(this).attr('data') + '\']').prop('selected', true);
            ba.sendPacket(new bb.sendCustomGameUpdate(5, ac, af));
          });
        };
        ScrimmageHelper.checkLeader();
      },
      getTeamOptions: function(ah, af) {
        var ac = '';
        if (af != null && af > 1) {
          ac = '<td><select class=\'custom-game\' id=\'cgp-' + ah + '\'><option value=\'0\'>Spectator</option>';
          for (var ab = 1; ab <= af; ab++) {
            ac += '<option value=\'' + ab + '\' class=\'t' + ab + '\'>' + gb[ab] + '</option>';
          };
          ac += '</select></td>';
        };
        return ac;
      }
    };

    function fl(ab) {
      this.id = ab;
      this.type = 0;
      this.nameCache = null;
      this.skin = null;
      this.playerId = 0;
      this.color = null;
      this.x = 0;
      this.y = 0;
      this.x_ = 0;
      this.y_ = 0;
      this.size = 0;
      this.size_ = 0;
      this.steps = 0;
      this.massLastAmount = -1;
      this.cache = null;
    }
    fl.prototype.setType = function(ab) {
      this.type = ab;
    };
    fl.prototype.setX = function(ab) {
      this.x_ = ab;
      this.x = ab;
    };
    fl.prototype.setY = function(ab) {
      this.y_ = ab;
      this.y = ab;
    };
    fl.prototype.updateX = function(ab) {
      this.x_ = ab;
    };
    fl.prototype.updateY = function(ab) {
      this.y_ = ab;
    };
    fl.prototype.setSize = function(ab) {
      this.size_ = ab;
      this.size = ab;
    };
    fl.prototype.getMass = function() {
      return this.size * this.size / 25 >> 0;
    };
    fl.prototype.getRealMass = function() {
      return this.size_ * this.size_ / 25 >> 0;
    };
    fl.prototype.animate = function(ab) {
      this.x += (this.x_ - this.x) * ab;
      this.y += (this.y_ - this.y) * ab;
      this.size += (this.size_ - this.size) * ab;
      this.steps--;
    };
    fl.prototype.getSizeCache = function() {
      var ae = this.getMass();
      if (ae != this.massLastAmount || this.massLastAmount < 0) {
        var ad;
        if (gc.massType == 1) {
          ad = this.toShortString(ae);
        } else {
          ad = ae.toString();
        };
        var am = 0;
        var ac = 0;
        for (var af = 0; af < ad.length; af++) {
          var ab = ad.charAt(af);
          var ag = fu.getNumber(ab);
          am += ag.width - 2;
          ac = Math.max(ag.height, ac);
        };
        if (this.cache == null) {
          this.cache = aj.RenderTexture.create(am, ac);
        } else {
          if (am != this.cache.width || ac != this.cache.height) {
            this.cache.destroy({
              children: true,
              texture: true,
              baseTexture: true
            });
            this.cache = aj.RenderTexture.create(am, ac);
          }
        };
        var ah = fu.cacheContainer;
        var bx = 0;
        for (var af = 0; af < ad.length; af++) {
          var ab = ad.charAt(af);
          var ag = fu.getSizeCacheSprite();;
          ag.position.x = bx;
          ah.addChild(ag);
          bx += ag.width - 2;
        };
        ak.renderer.render(ah, {
          renderTexture: this.cache,
          clear: true
        });
        fu.clearCacheContainer();
        this.massLastAmount = ae;
      };
      return this.cache;
    };
    fl.prototype.toShortString = function(ah) {
      if (ah < 1000) {
        return ah.toString();
      } else {
        if (ah < 1000000) {
          var ab = Math.floor(ah / 100) / 10;
          return ab.toFixed(1) + 'K';
        } else {
          if (ah < 1000000000) {
            var ab = Math.floor(ah / 100000) / 10;
            return ab.toFixed(1) + 'M';
          } else {
            if (ah >= 1000000000) {
              var ab = Math.floor(ah / 100000000) / 10;
              return ab.toFixed(1) + 'B';
            }
          }
        }
      };
      return ah.toString();
    };

    function gd() {
      this.cache = {};
      this.cacheContainer = new aj.Container();
      this.sprites = [];
      this.spritesIndex = 0;
      this.getNumber = function(ab) {
        return this.cache[ab];
      };
      this.clearCacheContainer = function() {
        while (this.cacheContainer.children[0]) {
          this.cacheContainer.removeChild(this.cacheContainer.children[0]);
        };
        this.spritesIndex = 0;
      };
      this.getSizeCacheSprite = function() {
        while (this.spritesIndex >= this.sprites.length) {
          this.sprites.push(new aj.Sprite());
        };
        return this.sprites[this.spritesIndex++];
      };
      this.buildSizeCache = function() {
        var ab = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '.',
          'K',
          'M',
          'B',
          'T'
        ];
        for (var ah of ab) {
          var ac = new aj.Text(ah, {
            fontFamily: 'Verdana',
            fontWeight: 'bold',
            fontSize: 54,
            fill: '#fff',
            stroke: 'black',
            strokeThickness: 0
          });
          this.cache[ah] = ac;
        }
      };
    }
    const fu = new gd();
    fl.prototype.handleFood = function() {
      if (this.needsPixiUpdate && this.sprite.visible) {
        this.sprite.texture = cw;
        this.sprite.anchor.set(0.5);
        this.sprite.width = 12;
        this.sprite.height = 12;
        if (de.cThemeEnabled && dk.length > 0) {
          this.sprite.tint = dk[this.id % dk.length];
        } else {
          this.sprite.tint = this.color;
        };
        this.needsPixiUpdate = false;
      };
      this.sprite.position.set(this.x, this.y);
    };
    fl.prototype.handle = function() {
      switch (this.type) {
        case 0:
          break;
        case 1:
          if (this.needsPixiUpdate) {
            if (this.skin >= 0 && this.skin < ge.length) {
              this.sprite.texture = ge[this.skin];
            } else {
              this.sprite.texture = cv;
            };
            this.sprite.tint = this.color;
            this.sprite.width = this.size * 2;
            this.sprite.height = this.size * 2;
            this.needsPixiUpdate = false;
          };
          if (this.rainbow) {
            this.sprite.tint = gf[Math.floor(bc % gg / 100)];
          };
          this.sprite.position.set(this.x, this.y);
          break;
        case 2:
          var ac = ba.playerRegistry.getPlayerById(this.playerId);
          var af = 3;
          if (ba.playerId == this.playerId) {
            af = 1;
          } else {
            if (ba.partyIds[this.playerId] != null) {
              af = 2;
            }
          };
          let ab = this.needsPixiUpdate;
          if (this.needsPixiUpdate) {
            this.cellSprite = new aj.Sprite(aj.Texture.EMPTY);
            this.cellSprite.anchor.set(0.5);
            this.cellSprite.width = cr;
            this.cellSprite.height = cr;
            this.container.addChild(this.cellSprite);
            this.skinSprite = new aj.Sprite(aj.Texture.EMPTY);
            this.skinSprite.anchor.set(0.5);
            this.skinSprite.width = cr;
            this.skinSprite.height = cr;
            this.container.addChild(this.skinSprite);
            this.massSprite = new aj.Sprite(aj.Texture.EMPTY);
            this.container.addChild(this.massSprite);
            if (ac.name.length > 0) {
              this.nameSprite = new aj.Sprite(aj.Texture.EMPTY);
              this.container.addChild(this.nameSprite);
            };
            this.needsPixiUpdate = false;
          };
          if (ac.cacheUpdate || ab) {
            if (this.nameSprite) {
              this.nameSprite.texture = ac.getNameCache(ac.cacheUpdate).texture;
              this.nameSprite.texture.update();
            };
            if (ac.spiked == 1) {
              if (null) {
                this.cellSprite.texture = null;
              } else {
                this.cellSprite.texture = bi;
              };
              this.cellSprite.tint = 16777215;
            } else {
              if (ac.spiked == 2) {
                if (null) {
                  this.cellSprite.texture = null;
                } else {
                  this.cellSprite.texture = bj;
                };
                this.cellSprite.tint = 16777215;
              } else {
                this.cellSprite.texture = cu;
                this.cellSprite.tint = ac.cellColor;
              }
            }
          };
          this.skinSprite.visible = 3 >= af && ac.spiked == 0;
          if (this.skinSprite.visible) {
            var ad = ac.getSkin();
            if (ad != null) {
              if (!ad.isGif) {
                if (ad !== this.skinSprite.texture) {
                  this.skinSprite.texture = ad;
                }
              } else {
                this.skinSprite.texture = ad.getTexture();
              }
            } else {
              this.skinSprite.visible = false;
            }
          };
          var ag = 4 / this.size;
          var bx = Math.max(ag, 0.16) * 4;
          var ae = ba.scale >= ag * 4 || de.cDisableAutoNameHiding;
          if (this.nameSprite) {
            this.nameSprite.visible = 3 >= af && ae;
            if (this.nameSprite.visible) {
              this.nameSprite.scale.set(bx);
              this.nameSprite.x = -(this.nameSprite.width / 2);
              if (!ac.lowerName) {
                this.nameSprite.y = -(this.nameSprite.height / 2);
              } else {
                this.nameSprite.y = ct - this.nameSprite.height / 2;
              };
              if (ac.effect == 1 && gh[0] != null) {
                if (!this.nameEffectSprite) {
                  this.nameEffectSprite = new aj.Sprite(aj.Texture.EMPTY);
                  this.nameSprite.addChild(this.nameEffectSprite);
                };
                var am = gh[0].getTexture();
                this.nameEffectSprite.scale.set(this.nameSprite.texture.width / am.width, this.nameSprite.texture.height / am.height);
                this.nameEffectSprite.texture = am;
              }
            }
          };
          if (de.cShowMass && (af <= 2 || ba.serverData.autosplits) && ae) {
            var ah = this.getSizeCache();
            this.massSprite.texture = ah;
            this.massSprite.scale.set(bx);
            this.massSprite.x = -(this.massSprite.width / 2);
            if (this.nameSprite != null && this.nameSprite.visible) {
              this.massSprite.y = this.nameSprite.y + this.nameSprite.height;
            } else {
              this.massSprite.y = -(this.massSprite.height / 2);
            };
            this.massSprite.visible = true;
          } else {
            this.massSprite.visible = false;
          };
          if ((ac.flags & 4) == 4) {
            if (!this.debuffSprite) {
              this.debuffSprite = new aj.Sprite(gi);
              this.debuffSprite.anchor.set(0.5);
              this.debuffSprite.width = cs;
              this.debuffSprite.height = cs;
              this.container.addChild(this.debuffSprite);
            }
          } else {
            if (this.debuffSprite) {
              this.debuffSprite.parent.removeChild(this.debuffSprite);
              this.debuffSprite.destroy();
              this.debuffSprite = null;
            }
          };
          if ((ac.flags & 1) == 1) {
            if (!this.shieldSprite) {
              this.shieldSprite = new aj.Sprite(gj);
              this.shieldSprite.anchor.set(0.5);
              this.shieldSprite.width = cs;
              this.shieldSprite.height = cs;
              this.container.addChild(this.shieldSprite);
            }
          } else {
            if (this.shieldSprite) {
              this.shieldSprite.parent.removeChild(this.shieldSprite);
              this.shieldSprite.destroy();
              this.shieldSprite = null;
            }
          };
          this.container.scale.set(this.size / 128);
          this.container.position.set(this.x, this.y);
          break;
        case 3:
          if (this.needsPixiUpdate) {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128;
            if (null) {
              this.sprite.texture = null;
            } else {
              this.sprite.texture = bi;
            };
            this.needsPixiUpdate = false;
          };
          this.sprite.scale.set(this.size / 256);
          this.sprite.position.set(this.x, this.y);
          break;
        case 4:
          if (this.needsPixiUpdate) {
            if (null) {
              this.sprite.texture = null;
            } else {
              this.sprite.texture = bj;
            };
            if (cy.enabled && cy.motherCustomEnabled && !de.cDisableEventSkins && !null) {
              cy.motherCustom(this);
            } else {
              this.setDefaultSpriteAnchor();
            };
            this.needsPixiUpdate = false;
          };
          if (!null && cy.enabled) {
            if (this.size >= 100 && !de.cDisableEventSkins) {
              this.sprite.texture = bk;
            } else {
              this.sprite.texture = bj;
            }
          };
          this.sprite.scale.set(this.size / 256);
          this.sprite.position.set(this.x, this.y);
          break;
        case 5:
          if (this.needsPixiUpdate) {
            this.sprite.texture = gk[this.buff].texture;
            this.sprite.width = this.size * 2;
            this.sprite.height = this.size * 2;
            this.needsPixiUpdate = false;
          };
          this.sprite.position.set(this.x, this.y);
          break;
      }
    };
    fl.prototype.setDefaultSpriteAnchor = function() {
      this.sprite.anchor.set(0.5);
      this.sprite.width = 128;
      this.sprite.height = 128;
    };
    fl.prototype.onCreate = function(ab) {
      if (this.type == 2) {
        if (this.container) {
          return;
        };
        this.container = new aj.Container();
        this.container.parentCell = this;
        this.needsPixiUpdate = true;
        au.addChild(this.container);
      } else {
        if (this.sprite) {
          return;
        };
        this.sprite = new aj.Sprite(aj.Texture.EMPTY);
        this.sprite.parentCell = this;
        this.sprite.anchor.set(0.5);
        this.needsPixiUpdate = true;
        if (this.type != 0) {
          au.addChild(this.sprite);
        } else {
          ar.addChild(this.sprite);
        }
      };
      if (this.type == 6) {
        ab.foodObjects[this.id] = this;
      } else {
        ab.bucket[this.id] = this;
      };
      if (this.playerId == ab.playerId) {
        ab.myCells[this.id] = this;
      }
    };
    fl.prototype.onDelete = function() {
      if (this.container) {
        this.container.parent.removeChild(this.container);
        this.container.parentCell = null;
        this.container.destroy({
          children: true
        });
        this.container = null;
      } else {
        if (this.sprite) {
          this.sprite.parent.removeChild(this.sprite);
          this.sprite.parentCell = null;
          this.sprite.destroy({
            children: true
          });
          this.sprite = null;
        }
      };
      if (this.cache) {
        this.cache.destroy();
        this.cache = null;
      }
    };

    function ex() {
      this.bucket = {};
      this.defaultData;
      this.updatedPlayers = [];
      this.init = function() {
        this.defaultData = new fh(0);
        this.defaultData.name = '';
        this.defaultData.cellColor = 11184810;
      };
      this.add = function(ab) {
        this.bucket[ab.id] = ab;
      };
      this.remove = function(ab) {
        this.bucket[ab].onDelete();
        delete this.bucket[ab];
      };
      this.clear = function() {
        for (var ab in this.bucket) {
          this.remove(ab);
        }
      };
      this.getPlayer = function(ab) {
        return this.bucket[ab];
      };
      this.getPlayerById = function(ah) {
        var ab = this.bucket[ah];
        return ab != null ? ab : this.defaultData;
      };
      this.updatePlayer = function(ab) {
        ab.cacheUpdate = true;
        this.updatedPlayers.push(ab);
      };
      this.handleUpdatedPlayers = function() {
        while (this.updatedPlayers.length > 0) {
          var ab = this.updatedPlayers.shift();
          ab.cacheUpdate = false;
        }
      };
      this.init();
    }

    function fh(ab) {
      this.id = ab;
      this.name;
      this.skin;
      this.skinCache;
      this.cellColor;
      this.nameColor = '#fff';
      this.flags = 0;
      this.effect = 0;
      this.nameFont = 0;
      this.lowerName = false;
      this.nameCache = null;
      this.cacheUpdate = false;
      this.spiked = 0;
      this.setFlags = function(ab) {
        this.flags = ab;
        if ((this.flags & 8) == 8) {
          this.spiked = 1;
        } else {
          if ((this.flags & 16) == 16) {
            this.spiked = 2;
          } else {
            this.spiked = 0;
          }
        }
      };
      this.parseEffect = function(ab) {
        if (ab >= 64) {
          ab -= 64;
          this.lowerName = true;
        } else {
          this.lowerName = false;
        };
        this.effect = ab;
      };
      this.getNameCache = function(ab) {
        if (ab || this.nameCache == null) {
          var ah = gl(this.nameFont);
          var af, ac;
          if (ah == gm) {
            af = 'bold';
            ac = 0;
          } else {
            af = 'normal';
            ac = 9;
          };
          if (!this.nameCache) {
            this.nameCache = new aj.Text(this.name, {
              fontFamily: ah.font,
              fontWeight: af,
              fontSize: ah.size,
              fill: this.nameColor,
              stroke: ah.outlineColor,
              strokeThickness: ac
            });
          } else {
            this.nameCache.text = this.name;
            this.nameCache.style.fontFamily = ah.font;
            this.nameCache.style.stroke = ah.outlineColor;
            this.nameCache.style.fontWeight = af;
            this.nameCache.style.fontSize = ah.size;
            this.nameCache.style.fill = this.nameColor;
            this.nameCache.updateText();
          };
          this.nameCache.width;
        };
        return this.nameCache;
      };
      this.setSkin = function(ab) {
        if (ab.length == 0) {
          this.skin = null;
          this.skinCache = null;
        } else {
          if (ab !== this.skin) {
            this.skin = ab;
            this.skinCache = null;
          }
        }
      };
      this.getSkin = function() {
        if (this.skinCache != null) {
          return this.skinCache;
        };
        if (this.skin != null) {
          if (!bf[this.skin]) {
            bf[this.skin] = gn.LOADING;
            if (this.skin.endsWith('.gif')) {
              var ac = this.skin;
              var ab = this;
              gifFrames({
                url: ac,
                frames: 'all',
                cumulative: false,
                outputType: 'canvas'
              }).then(function(ab) {
                var ah = new go();
                ah.loadFromFrameData(ab);
                bf[ac] = gn.LOADED;
                bd[ac] = ah;
              }).catch(function(ah) {
                ab.skin = null;
              });
            } else {
              var ah = new Image();
              ah.crossOrigin = '';
              var ac = this.skin;
              ah.addEventListener('load', function() {
                var ab = document.createElement('canvas');
                ab.width = 512;
                ab.height = 512;
                var af = ab.getContext('2d');
                af.beginPath();
                af.arc(256, 256, 256, 0, cq, false);
                af.closePath();
                af.clip();
                af.drawImage(ah, 0, 0, 512, 512);
                var ag = aj.Texture.from(ab);
                bf[ac] = gn.LOADED;
                bd[ac] = ag;
              });
              ah.addEventListener('error', function() {
                bf[ac] = gn.ERROR;
              });
              ah.src = ac;
            }
          } else {
            if (bf[this.skin] == gn.LOADED) {
              this.skinCache = bd[this.skin];
              return this.skinCache;
            } else {
              if (bf[this.skin] == gn.ERROR) {
                this.skin = null;
              }
            }
          }
        };
        return null;
      };
      this.onDelete = function() {
        if (this.nameCache) {
          this.nameCache.destroy();
        }
      };
    }

    function ee() {}
    ee.prototype.connectionStart = function() {
      var ah = 'Gota Web ' + version;
      var ab = new ArrayBuffer(1 + ah.length + 1 + 1);
      var ac = new DataView(ab);
      ac.setUint8(0, 255);
      ac.setUint8(1, 6);
      gp(2, ac, ah);
      return ab;
    };
    ee.prototype.setName = function(ah) {
      var ab = new ArrayBuffer(2 + (ah.length + 1) * 2);
      var ac = new DataView(ab);
      ac.setUint8(0, 0);
      gq(1, ac, ah);
      if (de.cSilentLogin) {
        ac.setUint8(2 + ah.length * 2 + 1, 1);
      };
      return ab;
    };
    ee.prototype.sendKey = function(ah) {
      var ab = new ArrayBuffer(1);
      var ac = new DataView(ab);
      ac.setUint8(0, ah);
      return ab;
    };
    ee.prototype.sendMouse = function(ac, af) {
      var ab = new ArrayBuffer(9);
      var ah = new DataView(ab);
      ah.setUint8(0, 16);
      ah.setInt32(1, ac, true);
      ah.setInt32(5, af, true);
      return ab;
    };
    ee.prototype.sendEjectMass = function(ah) {
      var ab = new ArrayBuffer(1);
      var ac = new DataView(ab);
      ac.setUint8(0, ah ? 3 : 4);
      return ab;
    };
    ee.prototype.sendPing = function() {
      var ab = new ArrayBuffer(1);
      var ah = new DataView(ab);
      ah.setUint8(0, 71);
      return ab;
    };
    ee.prototype.sendSpectate = function(ah) {
      var ab = new ArrayBuffer(3);
      var ac = new DataView(ab);
      ac.setUint8(0, 1);
      if (ah) {
        ac.setUint16(1, ah, true);
      };
      return ab;
    };
    ee.prototype.sendChat = function(ac, ah) {
      var ab = new ArrayBuffer(2 + (ac.length + 1) * 2);
      var af = new DataView(ab);
      af.setUint8(0, 72);
      af.setUint8(1, ah);
      gq(2, af, ac);
      return ab;
    };
    ee.prototype.sendInviteResponse = function(ab) {
      var ah = new ArrayBuffer(2);
      var ac = new DataView(ah);
      ac.setUint8(0, 41);
      ac.setUint8(1, ab ? 1 : 0);
      return ah;
    };
    ee.prototype.sendPartyAction = function(ab, ac) {
      var ah = new ArrayBuffer(6);
      var af = new DataView(ah);
      af.setUint8(0, 40);
      af.setUint8(1, ab);
      af.setUint32(2, ac, true);
      return ah;
    };
    ee.prototype.sendPartyJoin = function(ah) {
      var ab = new ArrayBuffer(1 + ah.length + 1);
      var ac = new DataView(ab);
      ac.setUint8(0, 42);
      gp(1, ac, ah);
      return ab;
    };
    ee.prototype.sendShowProfile = function(ah) {
      var ab = new ArrayBuffer(3);
      var ac = new DataView(ab);
      ac.setUint8(0, 103);
      ac.setUint16(1, ah, true);
      return ab;
    };
    ee.prototype.sendWhisper = function(ah, ac) {
      var ab = new ArrayBuffer(5 + (ac.length + 1) * 2);
      var af = new DataView(ab);
      af.setUint8(0, 73);
      af.setUint32(1, ah, true);
      gq(5, af, ac);
      return ab;
    };
    ee.prototype.sendSubPanel = function() {
      var ab = new ArrayBuffer(8 + (dl.skinName.length + 1));
      var ah = new DataView(ab);
      ah.setUint8(0, 10);
      ah.setUint8(1, dl.nameColor.r);
      ah.setUint8(2, dl.nameColor.g);
      ah.setUint8(3, dl.nameColor.b);
      ah.setUint8(4, dl.chatColor);
      ah.setUint8(5, dl.effect);
      ah.setUint8(6, dl.lowerName ? 1 : 0);
      gp(7, ah, dl.skinName);
      ah.setUint8(8 + dl.skinName.length, dl.nameFont);
      return ab;
    };
    ee.prototype.sendLockedNameChange = function(ah) {
      var ab = new ArrayBuffer(1 + (ah.length + 1));
      var ac = new DataView(ab);
      ac.setUint8(0, 11);
      gp(1, ac, ah);
      return ab;
    };
    ee.prototype.sendOptions = function() {
      var ab = new ArrayBuffer(3);
      var ah = new DataView(ab);
      ah.setUint8(0, 104);
      ah.setUint16(1, de.rViewDistance, true);
      return ab;
    };
    ee.prototype.sendQueue = function(ah) {
      var ab = new ArrayBuffer(5);
      var ac = new DataView(ab);
      ac.setUint8(0, 80);
      ac.setUint8(1, ah);
      ac.setUint8(2, 0);
      ac.setUint16(3, 0);
      return ab;
    };
    ee.prototype.sendCustomGame = function(ah) {
      var ab = new ArrayBuffer(2);
      var ac = new DataView(ab);
      ac.setUint8(0, 90);
      ac.setUint8(1, ah);
      return ab;
    };
    ee.prototype.sendLeaveMatch = function() {
      var ab = new ArrayBuffer(1);
      var ah = new DataView(ab);
      ah.setUint8(0, 81);
      return ab;
    };
    ee.prototype.sendShowLobbies = function() {
      var ab = new ArrayBuffer(2);
      var ah = new DataView(ab);
      ah.setUint8(0, 93);
      return ab;
    };
    ee.prototype.sendJoinLobby = function(ah, ac) {
      var ab = new ArrayBuffer(5 + ac.length * 2 + 2);
      var af = new DataView(ab);
      af.setUint8(0, 94);
      af.setUint32(1, ah, true);
      gq(5, af, ac);
      return ab;
    };
    ee.prototype.sendCaptcha = function(ah) {
      var ab = new ArrayBuffer(1 + (ah.length + 1));
      var ac = new DataView(ab);
      ac.setUint8(0, 100);
      gp(1, ac, ah);
      return ab;
    };
    ee.prototype.sendAuthToken = function(ah) {
      var ab = new ArrayBuffer(1 + (ah.length + 1));
      var ac = new DataView(ab);
      ac.setUint8(0, 101);
      gp(1, ac, ah);
      return ab;
    };
    ee.prototype.sendCustomGameUpdate = function(ah, ac, af) {
      var ab = new ArrayBuffer(4);
      var ag = new DataView(ab);
      ag.setUint8(0, 91);
      ag.setUint8(1, ah);
      if (ah == 3 || ah == 7) {
        ag.setUint16(2, ac, false);
      } else {
        if (ah == 11) {
          ag.setInt16(2, ac, false);
        } else {
          ag.setUint8(2, ac);
          ag.setUint8(3, af);
        }
      };
      return ab;
    };
    ee.prototype.sendCustomGameUpdateString = function(ah, ac) {
      var ab = new ArrayBuffer(4 + ac.length * 2);
      var af = new DataView(ab);
      af.setUint8(0, 92);
      af.setUint8(1, ah);
      gq(2, af, ac);
      return ab;
    };

    function gp(ah, af, ac) {
      for (var ab = 0; ab < ac.length; ab++) {
        af.setUint8(ah, ac.charCodeAt(ab));
        ah++;
      };
      af.setUint8(ah, 0);
    }

    function gq(ah, af, ac) {
      for (var ab = 0; ab < ac.length; ab++) {
        af.setUint16(ah, ac.charCodeAt(ab), true);
        ah += 2;
      };
      af.setUint16(ah, 0, true);
    }

    function fj(ac) {
      var ah = '';
      while (true) {
        var ab = ac.getUint8(ac.offset);
        ac.offset++;
        if (ab == 0) {
          break;
        };
        ah += String.fromCharCode(ab);
      };
      return ah;
    }

    function fi(ac) {
      var ah = '';
      while (true) {
        var ab = ac.getUint16(ac.offset, true);;
        if (ab == 0) {
          break;
        };
        ah += String.fromCharCode(ab);
      };
      return ah;
    }

    function gr(ah) {
      while (true) {
        var ab = ah.getUint16(ah.offset, true);
        ah.offset += 2;
        if (ab == 0) {
          break;
        }
      }
    }

    function fe(ab, ah) {
      console.error(ab.message, ab.code);
      if (ah) {
        switch (ab.code) {
          case 'auth/user-disabled':
            alert('This account has been permanently suspended by an administrator.');
            break;
          case 'auth/popup-closed-by-user':
            break;
          default:
            alert(ab.message + ' (' + ab.code + ')');
            break;
        }
      }
    }

    function gs(ae, ag) {
      var ac = '';
      var af = '';
      var ah = 'white';
      if (ag.flags.STAFF) {
        af = 'Gota.io Staff';
        ac = 'build';
        ah = 'royalblue';
      } else {
        if (ag.flags.VERIFIED) {
          af = 'Verified Player';
          ac = 'check_circle';
        } else {
          return;
        }
      };
      var ab = document.createElement('i');
      ab.className = 'material-icons';
      ab.id = 'user-badge';
      ab.innerText = ac;
      ab.style.color = ah;
      $(ab).attr('data-balloon', af);
      $(ab).attr('data-balloon-pos', 'right');
      $(ae).append(ab);
    }

    function gu(ah, ac) {
      var ab = document.createElement('i');
      ab.className = 'material-icons';
      ab.innerText = ah;
      ab.setAttribute('data-balloon', ac);
      ab.setAttribute('data-balloon-pos', 'up');
      return ab;
    }

    function gv(ao, fn, bx, ac) {
      var ae = document.createElement('li');
      ae.className = 'user-embed menu-sub-bg2';
      ae.style.backgroundColor = da.uiMenuHeaderBackgroundColor;
      var ag = document.createElement('img');;;
      ae.appendChild(ag);
      var ad = document.createElement('div');
      ad.className = 'info';
      var fo = document.createElement('div');
      fo.className = 'username';
      fo.innerText = ao.username;
      ad.appendChild(fo);
      gs(fo, ao);
      var aw = document.createElement('div');
      var am = false;
      var en = null;
      if (bx) {
        en = ao.presence.server.charAt(0).toUpperCase() + ao.presence.server.slice(1);
        if (ao.presence.timestamp + 60000 < new Date().getTime() || ao.presence.id === undefined) {
          aw.className = 'status offline';
          aw.innerText = 'Not playing on any server';
        } else {
          am = true;
          aw.className = 'status ' + (ao.presence.status === 'ONLINE' ? 'online' : 'spectate');
          aw.innerText = (ao.presence.status === 'ONLINE' ? 'Playing ' : 'Spectating ') + ao.presence.gamemode + ' on ' + en + ' (ID ' + ao.presence.id + ')';
        }
      } else {
        aw.className = 'status pending';
        aw.innerText = 'Pending Friend Request';
      };
      ad.appendChild(aw);
      var ah = document.createElement('div');
      ah.className = 'actions';
      fo.addEventListener('click', function(ab) {
        fs(ao, $('#main-social'));
      });
      if (bx && am) {
        var db = gu('input', 'Join Server');
        db.addEventListener('click', function(ab) {
          dx(en);
          ba.play();
          ba.selfMsg(ao.username + '\'s ID is ' + ao.presence.id);
          dt($('#main-social'));
        });
        ah.appendChild(db);
      };
      if (!bx) {
        var af = gu('done', 'Add as Friend');
        af.isHandlingRequest = false;
        af.addEventListener('click', function(ah) {
          if (af.isHandlingRequest) {
            return;
          };
          af.isHandlingRequest = true;
          firebase.auth().currentUser.getIdToken().then(ah => {
            fetch('https://accounts.gota.io/api/v1/social/friends', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: ah,
                target: ao.uid,
                action: 2
              })
            }).then(ab => {
              return ab.json();
            }).then(ab => {
              if (ab.code !== 200) {
                alert(ab.message);
              };
              af.isHandlingRequest = false;
            }).catch(ab => {
              alert(ab);
              af.isHandlingRequest = false;
            });
          }).catch(ab => {
            fe(ab, true);
            af.isHandlingRequest = false;
          });
        });
        ah.appendChild(af);
      };
      var cl = gu('block', 'Remove Friend');
      cl.isHandlingRequest = false;
      cl.addEventListener('click', function(ah) {
        if (cl.isHandlingRequest || !confirm('Are you sure you want to remove "' + ao.username + '" as your friend?')) {
          return;
        };
        cl.isHandlingRequest = true;
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/social/friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ah,
              target: ao.uid,
              action: 4
            })
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            alert(ab.message);
            if (ab.code === 200) {
              firebase.database().ref(ck.callbacks[ao.uid]).off();
              ck.elements[ao.uid].remove();
              delete ck.callbacks[ao.uid];
              delete ck.elements[ao.uid];
            };
            cl.isHandlingRequest = false;
          }).catch(ab => {
            alert(ab);
            cl.isHandlingRequest = false;
          });
        }).catch(ab => {
          fe(ab, true);
          cl.isHandlingRequest = false;
        });
      });
      ah.appendChild(cl);
      ae.appendChild(ad);
      ae.appendChild(ah);
      if (ac) {
        return fn.appendChild(ae);
      } else {
        return ae;
      }
    }

    function fs(ac, ah, ab) {
      if (ah) {
        dt(ah);
      };
      $('#profile-username').text(ac.username);
      $('#profile-avatar').attr('src', ac.avatar);
      $('#profile-avatar').attr('alt', ac.username);
      $('#profile-level').html('Level ' + ac.levelData.level + '&nbsp;&nbsp;&nbsp;[' + gw(ac.levelData.xp_current) + '/' + gw(ac.levelData.xp_needed) + ']');
      if (ac.title && ac.title > 0 && gx[ac.title]) {
        $('#profile-title').text(gx[ac.title]);
      } else {
        $('#profile-title').text('');
      };
      $('#profile-name').off('click');
      if (ac.uid == ch.uid) {
        $('#profile-name').on('click', function() {
          $('#popup-profile').hide();
          ds($('#popup-account-username'));
        });
        $('#profile-name').css('cursor', 'pointer');
      } else {
        $('#profile-name').css('cursor', 'default');
      };
      if (ac.flags.STAFF) {
        $('#profile-avatar').addClass('spin');
      } else {
        $('#profile-avatar').removeClass('spin');
      };
      gs($('#profile-username'), ac);
      $('#profile-close-btn').off('click');
      $('#profile-close-btn').on('click', function() {
        if (ah) {
          ff(ah);
        };
        dt($('#popup-profile'));
      });
      ff($('#popup-profile'));
    }

    function gy(ah) {
      if (cj) {
        return;
      };
      var ac = $('#social-friends .user-list')[0];
      var af = $('#social-friends .user-list')[1];
      $('#social-uid').text(ah.uid);
      firebase.database().ref('/friendships/' + ah.uid).on('value', function(ad) {
        if (ad.val() === null) {
          var bx = document.createElement('div');
          var am = document.createElement('span');
          bx.className = 'title-text center';
          am.innerText = 'You have no friends \uD83D\uDE25';
          bx.appendChild(am);
          ac.appendChild(bx);
          return;
        };
        var ah = 0;
        var ag = ad.val();
        var ae = false;
        Object.keys(ag).map(ad => {
          var bx = ag[ad];
          if (!bx && !ae) {
            ae = true;
            firebase.auth().currentUser.getIdToken().then(ah => {
              fetch('https://accounts.gota.io/api/v1/social/friends/pending', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  token: ah
                })
              }).then(ab => {
                return ab.json();
              }).then(ab => {
                if (ab.code === 200) {
                  ab.profiles.forEach(ah => {
                    if (!ck.pendingFriends.includes(ah)) {
                      ck.pendingFriends.push(ah.uid);
                    };
                    if (ck.elements[ah.uid]) {
                      var ab = gv(ah, ck.elements[ah.uid], false, false);
                      af.replaceChild(ab, ck.elements[ah.uid]);
                      ck.elements[ad] = ab;
                      return;
                    };
                    ck.elements[ah.uid] = gv(ah, af, false, true);
                  });
                }
              });
            }).catch(aa => {
              return fe(aa, false);
            });
            return;
          };
          if (!ck.callbacks[ad]) {
            var am = '/users/' + ad;
            ck.callbacks[ad] = am;
            firebase.database().ref(am).on('value', function(af) {
              if (af.val() === null) {
                return;
              };
              var ah = af.val();
              ck.timestamps[ah.uid] = ah.presence.timestamp;
              if (ck.pendingFriends.includes(ad)) {
                ck.pendingFriends.slice(ck.pendingFriends.indexOf(ad), 1);
                ck.elements[ad].remove();
                var ab = gv(ah, ck.elements[ad], true, false);
                ac.appendChild(ab);
                ck.elements[ad] = ab;
                return;
              };
              if (ck.elements[ad]) {
                var ab = gv(ah, ck.elements[ad], true, false);
                ac.replaceChild(ab, ck.elements[ad]);
                ck.elements[ad] = ab;
                return;
              };
              ck.elements[ad] = gv(ah, ac, true, true);
              cx.friendOnlineCount.text(gz() + ' online');
            });
          };
          if (bx) {
            ah++;
          }
        });
        $('#social-friends-count').text(ah);
      });
      setInterval(function() {
        for (var ab in ck.timestamps) {
          if (!ck.timestamps.hasOwnProperty(ab)) {
            return;
          };
          var af = ck.timestamps[ab];
          if (af + 60000 < new Date().getTime() || af === undefined) {
            var ac = ck.elements[ab].children[1].children[1];;;
            var ah = ck.elements[ab].children[2].children[0];
            if (ah.dataset.balloon === 'Join Server') {
              ah.remove();
            }
          }
        }
      }, 60000);
      cj = true;
    }

    function gz() {
      var ac = 0;
      var ab = new Date().getTime();
      for (var ah in ck.timestamps) {
        var af = ck.timestamps[ah];
        if (af + 60000 < ab || af === undefined) {} else {
          ac++;
        }
      };
      return ac;
    }

    function eb() {
      if (cy.enabled && !de.cDisableEventSkins) {
        $('body').toggleClass('event-' + cy.key);
      };
      $('.server-tab').on('click', function() {
        var ab = $(this).attr('region');
        dy(ab);
      });
      $('#btn-play').on('click', function() {
        if (bl == null || Date.now() < cp) {
          return;
        };
        if (Object.keys(ba.myCells).length != 0 && this.currentServerName == bl.name) {
          dt(bn);
          return;
        };
        ba.spectate = false;
        if (ha.incrementPlay() && typeof adplayer != 'undefined') {
          aiptag.cmd.player.push(function() {
            adplayer.startPreRoll();
          });
          dt(bn);
          dr();
          cp = Date.now() + 2000;
        } else {
          ba.play();
        }
      });
      $('#btn-servers').on('click', function() {
        ah('main-servers');
      });
      $('#btn-options').on('click', function() {
        ah('main-options');
      });
      $('#btn-hotkeys').on('click', function() {
        ah('main-hotkeys');
      });
      $('#btn-themes').on('click', function() {
        ah('main-themes');
      });
      $('#btn-cellpanel').on('click', function() {
        ah('main-subpanel');
      });
      $('#btn-reddit').on('click', function() {
        window.open('https://www.reddit.com/r/PlayGotaIO/', '_blank');
      });
      $('#btn-discord').on('click', function() {
        window.open('https://gota.io/discord', '_blank');
      });
      $('#name-box').keypress(function(ab) {
        if (ab.keyCode == 13 && $(this).is(':focus')) {
          ba.play();
        }
      });
      $('#btn-spec').on('click', function() {
        if (bl == null || Date.now() < cp) {
          return;
        };
        if (ba.spectate && this.currentServerName == bl.name) {
          dt(bn);
          return;
        };
        ba.spectate = true;
        if (ha.incrementPlay() && typeof adplayer != 'undefined') {
          aiptag.cmd.player.push(function() {
            adplayer.startPreRoll();
          });
          dt(bn);
          dr();
          cp = Date.now() + 2000;
        } else {
          ba.spec();
        }
      });
      $('#chat-input').keyup(function(ab) {
        var af = $(this).val();
        var ag = af.split(' ');
        if (ab.keyCode == 13 && $(this).is(':focus')) {
          hb($(this).val());
        };
        if (af.length == 0 || af.endsWith(' ') || ab.keyCode == 13) {
          $('#autocomplete-panel').html('');
          $('#autocomplete-panel').hide();
        } else {
          if (af.startsWith('/')) {
            if (ag.length > 1) {
              return;
            };
            $('#autocomplete-panel').html('<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>');
            var ae = -1;
            Object.values(hc).map(ab => {
              if ((ae = ab.triggers.findIndex(ab => {
                  return ab.toLowerCase().startsWith(ag[0].substring(1).toLowerCase());
                })) > -1) {
                $('#autocomplete-panel tbody').append('<tr><td>' + ab.triggers[ae] + '</td><td>' + ab.triggers + '</td><td>' + ab.description + '</td></tr>');
              }
            });
            if ($('#autocomplete-panel tbody').children().length == 0) {
              $('#autocomplete-panel').hide();
            } else {
              $('#autocomplete-panel').show();
            }
          } else {
            if (ag[ag.length - 1].startsWith(':')) {
              $('#autocomplete-panel').html('');
              var ah = Object.keys(bw).filter(ab => {
                return ab.toLowerCase().includes(ag[ag.length - 1].substring(1).toLowerCase());
              });
              var ac = Object.keys(gifEmoteList).filter(ab => {
                return ab.toLowerCase().includes(ag[ag.length - 1].substring(1).toLowerCase());
              });
              if (ah.length === 0 && ac.length === 0) {
                $('#autocomplete-panel').html('');
                $('#autocomplete-panel').hide();
                return;
              } else {
                $('#autocomplete-panel').show();
              };
              if (ah.length > 0) {
                $('#autocomplete-panel').append('<h3>Emotes</h3>');
                ah.forEach(ab => {
                  $('#autocomplete-panel').append('<img name=\'' + ab + '\' title=\'' + ab + '\' src=\'https://gota.io/emotes/' + ab + '.png\' />');
                });
              };
              if (ac.length > 0) {
                $('#autocomplete-panel').append('<h3>Gifs</h3>');
                ac.forEach(ab => {
                  $('#autocomplete-panel').append('<img name=\'' + ab + '\' title=\'' + ab + '\' src=\'https://gota.io/emotes/gifs/' + ab + '.gif\' />');
                });
              }
            }
          }
        }
      });
      $('#autocomplete-panel').on('click', function(ab) {
        var ah = $('#chat-input').val().split(' ');
        if (ab.target.nodeName === 'TD') {
          hd('/' + ab.target.parentElement.children[0].innerHTML + ' ');
          $('#autocomplete-panel').html('');
          $('#autocomplete-panel').hide();
          $('#chat-input').focus();
        } else {
          if (ab.target.nodeName === 'IMG') {
            hd($('#chat-input').val().substring(0, $('#chat-input').val().length - ah[ah.length - 1].length) + ab.target.attributes.name.nodeValue + ' ');
            $('#autocomplete-panel').html('');
            $('#autocomplete-panel').hide();
            $('#chat-input').focus();
          }
        }
      });
      $('#animationDelay').on('change', function() {
        var ab = parseInt($(this).val());
        if (isNaN(ab)) {
          ab = 90;
        };
        de.rAnimationDelay = Math.min(Math.max(ab, 1), 250);
        $('#animationDelay').val(de.rAnimationDelay);
        $('#rAnimationDelay').val(de.rAnimationDelay);
      });
      $('#viewDistance').on('change', function() {
        var ab = parseInt($(this).val());
        if (isNaN(ab)) {
          ab = 100;
        };
        de.rViewDistance = Math.min(Math.max(ab, 50), 150);
        $('#viewDistance').val(de.rViewDistance);
        $('#rViewDistance').val(de.rViewDistance);
        ba.sendOptions();
      });
      $('#uiScale').on('change', function() {
        var ab = parseInt($(this).val());
        if (isNaN(ab)) {
          ab = 100;
        };
        ab *= 0.01;
        de.rUiScale = Math.min(Math.max(ab, 0.5), 1.25);
        $('#uiScale').val(Number.parseFloat(de.rUiScale * 100).toFixed(0));
        $('#rUiScale').val(de.rUiScale);
        $('.ui-scale').css('transform', 'scale(' + de.rUiScale + ')');
      });
      $('#chat-emote-btn').css('background-image', 'url(https://gota.io/emotes/' + he[Math.floor(Math.random() * he.length)] + '.png)');
      $('#chat-emote-btn').on('click', function() {
        $('#emote-panel').toggle();
      });
      $('#emote-panel ul li img').on('click', function(ab) {
        ag(ab.target.name + ' ');
        $('#chat-input').focus();
      });
      (function() {
        var ab = document.getElementById('chat-panel');
        document.getElementById('chat-resize').addEventListener('mousedown', ac, false);
        var ae, ad, ag, af;

        function ac(ac) {
          ae = ac.clientX;
          ad = ac.clientY;
          ag = parseInt(document.defaultView.getComputedStyle(ab).width, 10);
          af = parseInt(document.defaultView.getComputedStyle(ab).height, 10);
          document.documentElement.addEventListener('mousemove', ah, false);
          document.documentElement.addEventListener('mouseup', bx, false);
        }

        function ah(ah) {
          ab.style.width = ag + ah.clientX - ae + 'px';
          ab.style.height = af - (ah.clientY - ad) + 'px';
        }

        function bx(ab) {
          document.documentElement.removeEventListener('mousemove', ah, false);
          document.documentElement.removeEventListener('mouseup', bx, false);
        }
      }());
      $('.checkbox-options').on('change', function(aa) {
        hf($(this));
      });
      $('.options-container select').on('change', function(aa) {
        hg($(this));
      });
      $('.options-container input[type=range]').on('change', function(aa) {
        hh($(this));
      });
      $('#btn-changelog').on('click', function() {
        dt($('#popup-changelog'));
        ff(bn);
        window.open('https://discord.com/channels/166703751053312000/630428963889741854', '_blank');
      });
      $('#btn-close-changelog').on('click', function() {
        dt($('#popup-changelog'));
        ff(bn);
      });
      $('#btn-accept').on('click', function() {
        ba.sendPacket(new bb.sendInviteResponse(true));
        dt($('#popup-party'));
      });
      $('#btn-decline').on('click', function() {
        ba.sendPacket(new bb.sendInviteResponse(false));
        dt($('#popup-party'));
      });
      $('#popup-party-code-content button').on('click', function() {
        $('#popup-party-code-content input').select();
        document.execCommand('Copy');
        $('#popup-party-code').hide();
      });
      $('#menu-invite').on('click', function() {
        var ab = bt.data('selected');
        ba.sendPacket(new bb.sendPartyAction(0, ab));
      });
      $('#menu-whisper').on('click', function() {
        var ab = bt.data('selected');
        var ah = $('#chat-input').val();
        $('#chat-input').val('/t ' + ab + ' ' + ah);
      });
      $('#menu-profile').on('click', function() {
        var ab = bt.data('selected');
        ba.sendPacket(new bb.sendShowProfile(ab));
      });
      $('#menu-pu_pr').on('click', function() {
        if (ba.partyCode == undefined) {
          ba.sendPacket(new bb.sendPartyAction(4, 0));
          $('#menu-pu_pr span').text('Private');
        } else {
          ba.sendPacket(new bb.sendPartyAction(4, 1));
          $('#menu-pu_pr span').text('Public');
        }
      });
      $('#menu-promote').on('click', function() {
        var ab = bt.data('party') + 1;
        if (ab >= 0) {
          ba.sendPacket(new bb.sendPartyAction(2, ab));
        }
      });
      $('#menu-kick').on('click', function() {
        var ab = bt.data('party') + 1;
        if (ab >= 0) {
          ba.sendPacket(new bb.sendPartyAction(1, ab));
        }
      });
      $('#menu-spectate').on('click', function() {
        var ab = bt.data('selected');
        if (ab >= 0) {
          ba.sendPacket(new bb.sendSpectate(ab));
        }
      });
      $('#menu-block').on('click', function() {
        var ah = parseInt(bt.data('selected'));
        var ab = en(ah);
        ba.selfMsg(ab);
      });
      $(document).on('click', function(ab) {
        bt.hide();
        if (ab.target.id !== 'chat-emote-btn') {
          $('#emote-panel').hide();
        };
        if ($('#popup-party-code').css('display') !== 'none' && ab.target.id !== 'popup-party-code') {
          $('#popup-party-code').hide();
        }
      });
      $('#aEditChatTabs').on('click', function(ab) {
        fm();
        dt(bn);
        ff($('#popup-chat-tab-editor'));
      });
      $('#cte-tab-selector').on('change', hi);
      $('#btn-chat-tab-editor-add').on('click', hj);
      $('#btn-chat-tab-editor-remove').on('click', hk);
      $('#btn-chat-tab-editor-update').on('click', hl);
      $('.custom-asset-skinner').on('click', function() {
        $('#popup-asset-skinner .title-text').text($(this).text());
        $('#input-asset-skinner').attr('asset', $(this).attr('id')).val('');
        dt(bn);
        ff($('#popup-asset-skinner'));
      });
      $('#btn-custom-asset-set').on('click', function() {
        if (!de.cThemeEnabled) {
          hm();
        };
        var ah = $('#input-asset-skinner').val();
        if (ah) {
          var ab = $('#input-asset-skinner').attr('asset');
          if (ab.charAt(0) == 'a' && da[ab] != null) {
            hn(ab, ah);
          }
        };
        $('#popup-asset-skinner .back-button').trigger('click');
      });
      $('#btn-custom-asset-clear').on('click', function() {
        if (!de.cThemeEnabled) {
          hm();
        };
        var ab = $('#input-asset-skinner').attr('asset');
        if (ab.charAt(0) == 'a' && da[ab] != null) {
          hn(ab, '');
        }
      });
      $('#popup-asset-skinner').on('dragover', false).on('drop', function(ab) {
        if (!de.cThemeEnabled) {
          hm();
        };
        var ac = $('#input-asset-skinner').attr('asset');
        if (ac.charAt(0) == 'a' && da[ac] != null) {
          var ah = ho(ab.originalEvent);
          if (/\.(jpe?g|png|gif)$/i.test(ah.name)) {
            var af = new FileReader();
            af.addEventListener('load', function() {
              hn(ac, this.result);
            }, false);
            af.readAsDataURL(ah);
          }
        };
        return false;
      });
      $('#btn-food-colors').on('click', function() {
        hp();
        dt(bn);
        ff($('#popup-food-colors'));
      });
      $('#btn-theme-export').on('click', function() {
        if (!de.cThemeEnabled) {
          return;
        };;
        var ab = JSON.stringify(da, null, 2);
        hq('theme.json', ab, 'text/plain');
      });
      $('#btn-theme-import').on('click', function() {
        $('#theme-import').trigger('click');
      });
      $('#theme-import').on('change', function() {
        var ah = $(this).prop('files');
        if (ah.length > 0) {
          var ab = ah[0];
          hr(ab);
        }
      });
      $('#main-themes .options-container').on('dragover', false).on('drop', function(ab) {
        var ah = ho(ab.originalEvent);
        hr(ah);
        return false;
      });
      $('#cGlobalLeaderboard').on('change', function() {
        if (!ch || cm) {
          return;
        };
        cm = true;
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/options/setFlags', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ah
            })
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            cm = false;
            $(this).prop('checked', ab.message);
          }).catch(ab => {
            console.error(ab);
            cm = false;
            alert(ab);
          });
        }).catch(aa => {
          fe(aa, true);
          cm = false;
        });
      });
      firebase.auth().onAuthStateChanged(function(ab) {
        if (ab) {
          if (!eg.consented) {
            firebase.auth().signOut().then(function() {});
            return;
          };
          hs();
          if (ba.isConnected() && firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.getIdToken(true).then(ab => {
              ba.sendPacket(new bb.sendAuthToken(ab));
            }).catch(aa => {
              return fe(aa, true);
            });
          };
          var ah = firebase.database().ref('users/' + ab.uid);
          var af = false;
          ah.on('value', function(am) {
            var ag = am.val();
            if (!ag) {
              return;
            };
            if (!af) {
              $('#account-loader').hide();
              $('#authed').show();
              $('#authed').attr('style', 'display: flex;');
              $('#cGlobalLeaderboard').removeAttr('disabled');
              $('#cGlobalLeaderboard').prop('checked', ag.flags.PUBLIC);
              af = true;
            };
            ch = ag;
            $('#account-avatar').attr('src', ag.avatar);
            $('#account-username').text(ag.username);
            gs($('#account-username'), ag);
            $('#account-level').html('Level ' + ag.levelData.level + '&nbsp;&nbsp;&nbsp;&nbsp;' + gw(ag.levelData.xp_current) + '/' + gw(ag.levelData.xp_needed) + ' XP');
            $('.xp-meter > span').each(function() {
              var ab = ag.levelData.xp_current / ag.levelData.xp_needed * 100;
              $(this).animate({
                width: ab + '%'
              }, 1200);
            });
            if (!ba.accountListeners.loadServers) {
              ba.accountListeners.loadServers = firebase.database().ref('servers/account/' + ch.uid).on('value', function(ag) {
                var ab = ag.val();
                if (!ab) {
                  return;
                };
                ac = {};
                for (var ah in ab) {
                  var af = ab[ah];
                  if (af.up) {
                    ac[af.name] = new dz(af.name, af.ip + ':' + af.port, 0, 0, '?', af.gamemode, af.region, af.ssl, 0);
                  }
                };
                ea();
                if (bl != null) {
                  dx(bl.name);
                }
              });
            };
            if (ag.flags.DISCORD_LINKED && !ba.accountListeners.loadDiscord) {
              ba.accountListeners.loadDiscord = firebase.firestore().collection('discord').doc(ch.uid).onSnapshot(ab => {
                if (ab.exists) {
                  $('#discordLinkStatus').text('Your account is linked with ' + ab.data().username + '#' + ab.data().discrim);
                  $('#discordLinkStatus').show();
                  $('#discordLink').hide();
                  $('#discordUnlink').show();
                  $('.discord-login-container').css('padding', '15px');
                } else {
                  $('#discordLinkStatus').hide();
                  $('#discordUnlink').hide();
                  $('#discordLink').show();
                  $('.discord-login-container').css('padding', '30px');
                }
              });
            };
            if (ag.tokens !== undefined) {
              var ad = new Date();
              ad.setMonth(ad.getMonth() + ag.tokens);
              if (ag.tokens == 0) {
                $('#redeem-tokens').hide();
                $('#token-amount').text('You have 0 tokens.');
              } else {
                $('#redeem-tokens').show();
                $('#token-amount').text('You have ' + ag.tokens + ' tokens, maximum expiry date: ' + function toString() {
                  [native code]
                }());
                $('#redeem-spend').attr('max', ag.tokens);
              }
            } else {
              $('#token-amount').text('You have 0 tokens.');
            };
            if (ch.title && ch.title > 0 && ci && ci.titles && ci.titles.length > 0) {
              var ah = $('#account-titles');
              var bx = 0;
              for (var ae = 0; ae < ci.titles.length; ae++) {
                if (ci.titles[ae] == ch.title) {
                  bx = ae + 1;
                }
              };
              if (bx > 0) {
                ah.val(bx);
              }
            };
            if (!ba.accountListeners.loadPrivateData) {
              ba.accountListeners.loadPrivateData = firebase.database().ref('private/' + ab.uid).on('value', function(ag) {
                var ah = ag.val();
                if (!ah) {
                  return;
                };
                ci = ah;
                if (ci.titles && ci.titles.length > 0) {
                  var ab = $('#account-titles');
                  var af = 0;
                  ab.empty();
                  ab.append('<option value=\'0\'>Default Title</option>');
                  for (var ac = 0; ac < ah.titles.length; ac++) {
                    ab.append('<option value=\'' + (ac + 1) + '\'>' + gx[ci.titles[ac]] + '</option>');
                    if (ci.titles[ac] == ch.title) {
                      af = ac + 1;
                    }
                  };
                  if (af > 0) {
                    ab.val(af);
                  };
                  ab.css('display', 'inline-block');
                } else {
                  $('#account-titles').css('display', 'none');
                };
                if (ci.message && ci.message.title && ci.message.content && !ci.message.read) {
                  $('#popup-message-title').text(ci.message.title);
                  $('#popup-message-content').html(ci.message.content);
                  ff($('#popup-message'));
                  dt(bn);
                }
              });
            };
            if (cj) {
              gy(ch);
            };
            fx(ab.uid);
          });
        } else {
          $('#cGlobalLeaderboard').attr('disabled');
          if (!eg.consented) {
            $('#authed').hide();
            $('#account-loader').hide();
            $('#guest').hide();
            $('#no_cookie_consent').show();
          } else {
            $('#authed').hide();
            $('#account-loader').hide();
            $('#no_cookie_consent').hide();
            $('#guest').show();
          }
        }
      });
      $('#account-login').on('click', function() {
        if (eg.consented) {
          firebase.auth().signInWithPopup(ae).then(function(aa) {}).catch(aa => {
            return fe(aa, true);
          });
        }
      });
      $('#account-logout').on('click', function() {
        firebase.auth().signOut().then(function() {
          $('#authed').hide(500);
          $('#guest').show();
          $('#discordLinkStatus').hide();
          $('.discord-login-container').show();
        }).catch(aa => {
          return fe(aa, true);
        });
      });
      $('#account-shop').on('click', function() {
        window.open('https://store.gota.io/', '_blank');
      });
      $('#account-social').on('click', function() {
        if (!ch) {
          return;
        };
        gy(ch);
        ff($('#main-social'));
        dt($(bn));
      });
      $('#social-back-button').on('click', function() {
        dt($('#main-social'));
        ff($(bn));
      });
      $('#account-profile').on('click', function() {
        fs(ch, bn);
      });
      $('#food-colors-close-btn').on('click', function() {
        ds(bn);
        dt($('#popup-food-colors'));
      });

      function af(ah, ab) {
        if (ah) {
          $(ab).prop('disabled', false);
          $(ab).text('Set');
          return;
        };
        $(ab).prop('disabled', true);
        $(ab).text('...');
      }
      $('#account-titles').on('change', function() {
        if (cm) {
          return;
        };
        var ah = parseInt($(this).val());
        cm = true;
        firebase.auth().currentUser.getIdToken().then(ac => {
          fetch('https://accounts.gota.io/api/v1/options/setTitle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ac,
              title: ah
            })
          }).then(ab => {
            return ab.json();
          }).then(aa => {
            cm = false;
          }).catch(ab => {
            console.error(ab);
            cm = false;
          });
        }).catch(aa => {
          fe(aa, true);
          cm = false;
        });
      });
      $('#popup-message-read-btn').on('click', function() {
        if (cm) {
          return;
        };
        dt($('#popup-message'));
        ds(bn);
        cm = true;
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/options/markAsRead', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ah
            })
          }).then(ab => {
            return ab.json();
          }).then(aa => {
            cm = false;
          }).catch(ab => {
            console.error(ab);
            cm = false;
          });
        }).catch(aa => {
          fe(aa, true);
          cm = false;
        });
      });
      $('#account-set-username-btn').on('click', function() {
        if (!ch) {
          return;
        };
        af(false, this);
        var ah = $('#account-username-input').val();
        if (!ah || ah == '' || ah.trim() == '') {
          alert('Please provide a username!');
          af(true, this);
          return;
        };
        firebase.auth().currentUser.getIdToken().then(ac => {
          fetch('https://accounts.gota.io/api/v1/social/username', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ac,
              username: ah
            })
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            af(true, this);
            if (ab.code == 200) {
              ds(bn);
              $('#popup-account-username').hide();
              return;
            };
            alert(ab.message);
          }).catch(ab => {
            console.error(ab);
            alert(ab);
            af(true, this);
          });
        }).catch(aa => {
          af(true, this);
          fe(aa, true);
        });
      });
      $('.popup-panel .back-button').on('click', function() {
        ht();
        ds(bn);
      });
      $('#discordLink').on('click', function() {
        if (!ch) {
          return;
        };
        firebase.auth().currentUser.getIdToken().then(ab => {
          window.open('https://accounts.gota.io/api/v1/options/discord/redirect?token=' + ab, 'popup', 'width=600,height=700');
        });
      });
      $('#discordUnlink').on('click', function() {
        if (!ch) {
          return;
        };
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/options/discord/unlink', {
            method: 'POST',
            body: JSON.stringify({
              token: ah
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            alert(ab.message);
          });
        }).catch(aa => {
          return fe(aa);
        });
      });
      $('#redeem-tokens').submit(function(ah) {
        ah.preventDefault();
        if (!ch) {
          return;
        };
        if (!confirm('By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.')) {
          return;
        };
        var ac = $('#redeem-name').val();
        var af = $('#redeem-spend').val();
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/options/redeem', {
            method: 'POST',
            body: JSON.stringify({
              token: ah,
              name: ac,
              spend: parseInt(af)
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            alert(ab.message);
            if (ab.code === 200) {
              fx(ch.uid);
            }
          });
        }).catch(aa => {
          return fe(aa);
        });
      });
      $('.error-banner').on('click', function() {
        $(this).hide();
      });
      $('#btn-add-friend').on('click', function(ah) {
        ah.preventDefault();
        if (!ch) {
          return;
        };
        var af = prompt('Enter friend\'s UID (found above add friend button)');
        if (!af) {
          return;
        };
        var ac = af.replace(/\s/g, '');
        if (typeof af !== 'string' || ac.length === 0) {
          return alert('Please enter a valid UID');
        };
        firebase.auth().currentUser.getIdToken().then(ah => {
          fetch('https://accounts.gota.io/api/v1/social/friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: ah,
              target: ac,
              action: 1
            })
          }).then(ab => {
            return ab.json();
          }).then(ab => {
            alert(ab.message);
          });
        }).catch(aa => {
          return fe(aa, true);
        });
      });
      document.getElementById('party-canvas').oncontextmenu = hu;
      $(document).keyup(function(ab) {
        if (ab.keyCode == 13) {
          var ah = $('#chat-input');
          if (document.activeElement.tagName != 'INPUT') {
            var ac = ah[0];
            if (ac) {
              ac.setSelectionRange(ac.value.length, ac.value.length);
            };
            ah.focus();
          } else {
            if (ah.is(':focus')) {
              ah.blur();
            }
          }
        }
      });
      $(window).bind('beforeunload', function() {
        return 'Are you sure you want to leave Gota.io?';
      });
      hv();
      $('.keybinds-btn').on('click', function() {
        $('.keybinds-btn').removeClass('keybinds-btn-selected');
        $(this).addClass('keybinds-btn-selected');
        dg = true;
      });
      $('#btn-reset-keybinds').on('click', function() {
        $('.keybinds-btn').each(function() {
          var ab = $(this);
          var ah = ab.attr('id');
          if (dh[ah] != null) {
            df[ah] = dh[ah];
            hw(ab);
          }
        });
      });
      $('#scrimmage-mode-select').on('change', function() {
        $('#scrimmage-mode-info').children().css('display', 'none');
        $('#scrimmage-info-' + $(this).val()).css('display', 'block');
      });
      $('#btn-queue').on('click', function() {
        var ab = parseInt($('#scrimmage-mode-select').val());
        var ah = isNaN(ab) ? 0 : Math.min(Math.max(ab, 0), 100);
        ba.sendPacket(new bb.sendQueue(ah));
        $(this).blur();
      });
      $('#btn-leave-match').on('click', function() {
        ba.sendPacket(new bb.sendLeaveMatch());
      });
      $('#btn-custom-create').on('click', function() {
        ba.sendPacket(new bb.sendCustomGame(0));
        $(this).blur();
      });
      $('#btn-custom-return').on('click', function() {
        ba.sendPacket(new bb.sendCustomGame(1));
      });
      $('#btn-custom-start').on('click', function() {
        ba.sendPacket(new bb.sendCustomGame(2));
      });
      $('#btn-custom-lobbies').on('click', function() {
        ba.sendPacket(new bb.sendShowLobbies());
      });
      $('#btn-lobbies-refresh').on('click', function() {
        ba.sendPacket(new bb.sendShowLobbies());
      });
      $('#btn-lobbies-join').on('click', function() {
        if (bm === 0) {
          return;
        };
        var ah = bm;
        var ac = '';
        var ab = ca[ah];
        if (ab == null) {
          return;
        };
        if (ab.hasPasscode) {
          ac = prompt('Enter the password to join this game', '');
        };
        if (ac == null) {
          ac = '';
        };
        ba.sendPacket(new bb.sendJoinLobby(ah, ac));
      });
      $('#btn-lobbies-return').on('click', function() {
        $('.scrimmage-full').css('display', 'none');
        $('#scrimmage-menu').css('display', 'block');
      });
      $('#scrimmage-map').on('change', function(ah) {
        var ac = $(this).find('option:selected').val();
        var ab = $(this).attr('data');
        if (ac != ab) {
          $('#scrimmage-map option[value=\'' + ab + '\']').prop('selected', true);
          ba.sendPacket(new bb.sendCustomGameUpdate(0, ac));
        }
      });
      $('#scrimmage-mapmode').on('change', function(ah) {
        var ac = $(this).find('option:selected').val();
        var ab = $(this).attr('data');
        if (ac != ab) {
          $('#scrimmage-mapmode option[value=\'' + ab + '\']').prop('selected', true);
          ba.sendPacket(new bb.sendCustomGameUpdate(1, ac));
        }
      });
      $('#scrimmage-mapsize').on('change', function(ah) {
        var ac = $(this).find('option:selected').val();
        var ab = $(this).attr('data');
        if (ac != ab) {
          $('#scrimmage-mapsize option[value=\'' + ab + '\']').prop('selected', true);
          ba.sendPacket(new bb.sendCustomGameUpdate(2, ac));
        }
      });
      $('#scrimmage-startmass').on('change', function(ah) {
        var ac = $(this).val();
        var ab = $(this).attr('data');
        if (isNaN(ac)) {
          $(this).val(ab);
          return;
        };
        ac = Math.max(1, Math.min(parseInt(ac), 32000));
        if (ac != ab) {
          $(this).val(ab);
          ba.sendPacket(new bb.sendCustomGameUpdate(3, ac));
        }
      });
      $('#scrimmage-virusDensity').on('change', function(ah) {
        var ac = $(this).val();
        var ab = $(this).attr('data');
        if (isNaN(ac)) {
          $(this).val(ab);
          return;
        };
        ac = Math.max(0, Math.min(parseInt(ac), 1000));
        if (ac != ab) {
          $(this).val(ab);
          ba.sendPacket(new bb.sendCustomGameUpdate(7, ac));
        }
      });
      $('#scrimmage-respawnDelay').on('change', function(ah) {
        var ac = $(this).val();
        var ab = $(this).attr('data');
        if (isNaN(ac)) {
          $(this).val(ab);
          return;
        };
        ac = Math.max(-1, Math.min(parseInt(ac), 600));
        if (ac != ab) {
          $(this).val(ab);
          ba.sendPacket(new bb.sendCustomGameUpdate(11, ac));
        }
      });
      $('#scrimmage-lockteams').on('change', function(ab) {
        var ah = $(this).prop('checked');
        $(this).prop('checked', !ah);
        ba.sendPacket(new bb.sendCustomGameUpdate(4, ah == true ? 1 : 0));
      });
      $('#scrimmage-autoSplit').on('change', function(ab) {
        var ah = $(this).prop('checked');
        $(this).prop('checked', !ah);
        ba.sendPacket(new bb.sendCustomGameUpdate(12, ah == true ? 1 : 0));
      });
      $('#scrimmage-public').on('change', function(ab) {
        var ah = $(this).prop('checked');
        $(this).prop('checked', !ah);
        ba.sendPacket(new bb.sendCustomGameUpdate(8, ah == true ? 1 : 0));
      });
      $('#scrimmage-password').on('change', function(ab) {
        var ac = $(this).prop('checked');
        $(this).prop('checked', !ac);
        var ah = '';
        if (ac) {
          ah = prompt('Enter a password to join your game (32 max characters)', '');
        };
        if (ah == null) {
          ah = '';
        };
        ba.sendPacket(new bb.sendCustomGameUpdateString(9, ah));
      });
      $('#scrimmage-name').on('click', function(ab) {
        if (!ba.isPartyLeader()) {
          return;
        };
        var ah = prompt('Enter a new name for your game (32 max characters)', $(this).text());
        if (ah != null) {
          ba.sendPacket(new bb.sendCustomGameUpdateString(10, ah));
        }
      });
    }

    function ez() {
      if (window.grecaptcha === undefined) {
        return;
      };
      cn = window.grecaptcha;
      window.grecaptcha = undefined;
      cn.ready(function() {});
    }

    function fd() {
      cn.execute('6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3', {
        action: 'login'
      }).then(function(ab) {
        ba.sendPacket(new bb.sendCaptcha(ab));
        document.body.classList.add('hide-captcha-badge');
        if (!ba.spectate) {
          ba.play();
        } else {
          ba.spec();
        }
      });
    }

    function ef() {
      em(function(ab) {
        $('#' + ab).spectrum({
          color: da[ab],
          preferredFormat: 'hex',
          showInput: true,
          showAlpha: true,
          clickoutFiresChange: false,
          change: function(ah) {
            da[ab] = ah.toRgbString();
            hx(ab, da[ab]);
          }
        });
      });
      $('#uiGameBackgroundColor').spectrum('option', 'showAlpha', false);
      $('#uiGameBorderColor').spectrum('option', 'showAlpha', false);
      $('#pFoodColors').spectrum({
        preferredFormat: 'hex',
        showInput: true,
        chooseText: 'Add',
        flat: true,
        clickoutFiresChange: false,
        change: function(ab) {
          if (!de.cThemeEnabled) {
            hm();
          };
          var ah = ab.toHexString();
          if (!da._FoodColors.includes(ah)) {
            da._FoodColors.push(ah);
            hp();
          }
        }
      });
    }

    function hp() {
      var ac = $('#food-color-list');
      ac.empty();
      if (da._FoodColors.length == 0) {
        hy();
        return;
      };
      try {
        for (var ah in da._FoodColors) {
          var ab = da._FoodColors[ah];
          ac.append('<div c=\'' + ab + '\' style=\'background:' + ab + ';color:' + hz(ab) + ';\'><span>' + ab + '</span><div><button class=\'btn-food-color\'>X</button></div></div>');
        };
        $('.btn-food-color').on('click', function() {
          var ac = $(this).parents().eq(1).attr('c');
          var ab, ah;
          while ((ab = da._FoodColors.indexOf(ac)) !== -1) {
            da._FoodColors.splice(ab, 1);
            ah = true;
          };
          if (ah) {
            hp();
          }
        });
      } catch (e) {
        da._FoodColors = [];
        ac.empty();
      };
      hy();
    }

    function hy() {
      dk = [];
      for (var ab of da._FoodColors) {
        dk.push(aj.utils.string2hex(ab));
      };
      for (var ah in ba.foodObjects) {
        ba.foodObjects[ah].needsPixiUpdate = true;
      }
    }

    function db(ac) {
      var ah = $('.keybinds-btn-selected');
      dg = false;
      if (ah.size() == 0) {
        return;
      };
      var ab = ah.first();
      ah.removeClass('keybinds-btn-selected');
      if (ac != 27) {
        df[ab.attr('id')] = ac;
      } else {
        df[ab.attr('id')] = -1;
      };
      hw(ab);
    }

    function hw(ab) {
      var ah = df[ab.attr('id')];
      ab.html(ia(ah));
    }

    function ia(ab) {
      return ab > 0 ? ib[ab].toUpperCase() : '&nbsp;';
    }

    function du() {
      var ab = document.getElementById('logo');
      if (de.cDisableEventSkins || !cy.enabled) {
        ab.style.backgroundImage = 'url(\'images/logo.png\')';
      } else {
        if (cy.enabled) {
          ab.style.backgroundImage = 'url(\'images/events/' + cy.key + '/logo.png\')';
        }
      }
    }

    function dv() {
      ic();
      bw = {};
      gifEmoteList = {};
      for (var ah in he) {
        var ab = he[ah];
        $('.emote-list').append('<li><img name=\'' + ab + '\' title=\'' + ab + '\' src=\'https://gota.io/emotes/' + ab + '.png\' /></li>');
        bw[ab] = true;
      };
      for (var ah in ie) {
        var ab = ie[ah];
        $('.gif-list').append('<li><img name=\'' + ab + '\' title=\'' + ab + '\' src=\'https://gota.io/emotes/gifs/' + ab + '.gif\' /></li>');
        gifEmoteList[ab] = true;
      };
      for (var ah = 0; ah < ig.length; ah++) {
        var ag = ig[ah];
        $('#spEffect').append('<option value="' + (ah + 1) + '">' + ih(ag) + '</option>');
        ge[ah] = cv;
        var af = new Image();
        af.src = 'images/ejected_mass_skins/' + ag + '.png';
        af.index = ah;
        af.addEventListener('load', function() {
          ge[this.index] = aj.Texture.from(this);
        });
      };
      if (cy.enabled && cy.customEjectedMass) {
        ii = new Image();
        ii.src = 'images/events/' + cy.key + '/ejected_mass.png';
      };
      ij();
      for (var ah = 0; ah < ik.length; ah++) {
        var ac = ah;
        gifFrames({
          url: 'images/effects/' + ik[ac] + '.gif',
          frames: 'all',
          cumulative: false,
          outputType: 'canvas'
        }).then(function(ab) {
          var ah = new go();
          ah.loadFromFrameData(ab);
          gh[ac] = ah;
        });
      }
    }

    function ic() {
      var ab, ag;
      if (!de.cDisableEventSkins && cy.enabled) {
        ab = 'images/events/' + cy.key;
        ag = '/spike_mother_happy.png';
      } else {
        ab = 'images';
        ag = '/spike_mother.png';
      };
      var ah = new Image();
      ah.addEventListener('load', function() {
        bi = aj.Texture.from(ah);
        if (ba) {
          for (var ab in ba.bucket) {
            var ac = ba.bucket[ab];
            if (ac.type == 3) {
              ;
            }
          }
        }
      });
      var ac = new Image();
      ac.addEventListener('load', function() {
        bj = aj.Texture.from(ac);
        if (ba) {
          for (var ab in ba.bucket) {
            var ah = ba.bucket[ab];
            if (ah.type == 4) {
              ah.needsPixiUpdate = true;
            }
          }
        }
      });
      var af = new Image();
      af.addEventListener('load', function() {
        bk = aj.Texture.from(af);
        if (ba) {
          for (var ab in ba.bucket) {
            var ah = ba.bucket[ab];
            if (ah.type == 4) {
              ah.needsPixiUpdate = true;
            }
          }
        }
      });
      ah.src = ab + '/spike.png';;
      af.src = ab + ag;
    }
    const il = {
      cDisableAA: function() {
        if (ak) {
          $('#performance-refresh').css('display', 'table-row');
        }
      },
      sRenderType: function() {
        if (ak) {
          $('#performance-refresh').css('display', 'table-row');
        }
      },
      cHideId: function() {
        var ab = de.cHideId ? 'none' : 'block';
        $('.pID').css('display', ab);
      },
      cHideServerDisplay: function() {
        var ab = de.cHideServerDisplay ? 'none' : 'block';
        $('.psvr').css('display', ab);
      },
      cTransCells: function() {
        au.alpha = de.cTransCells ? 0.5 : 1;
      },
      cColoredCellCount: function() {
        ba.updateCellCounter(cx.playerCellCount, true);
      },
      cHideChat: function() {
        var ab = de.cHideChat ? 'none' : 'block';
        $('#chat-panel').css('display', ab);
      },
      cHideMinimap: function() {
        var ab = de.cHideMinimap ? 'none' : 'block';
        $('#minimap-panel').css('display', ab);
      },
      cHideScorePanel: function() {
        var ab = de.cHideScorePanel ? 'none' : 'inline-block';
        $('#score-panel').css('display', ab);
      },
      cHideLeaderboard: function() {
        var ab = de.cHideLeaderboard ? 'none' : 'block';
        $('#leaderboard-panel').css('display', ab);
      },
      cHideExtraPanel: function() {
        var ab = de.cHideExtraPanel ? 'none' : 'block';
        $('#extra-panel').css('display', ab);
      },
      cShowCoordinates: function() {
        var ab = de.cShowCoordinates ? 'block' : 'none';
        $('#minimap-coordinates').css('display', ab);
        hv();
      },
      cDisableAutoZoom: function() {
        if (de.cDisableAutoZoom) {
          ba.scale_base = 0.2 * Math.max(ax.height / 1080, ax.width / 1920);
        }
      },
      cThemeEnabled: function() {
        if (!de.cThemeEnabled) {
          im();
          em(function(ab) {
            $('#' + ab).spectrum('disable');
          });
        } else {
          em(function(ab) {
            $('#' + ab).spectrum('enable');
          });
        }
      },
      cShowBorder: function() {
        es();
      },
      cDisableEventSkins: function() {
        if (cy.enabled) {
          $('body').toggleClass('event-' + cy.key);
        };
        ic();
        du();
      },
      cResizableChat: function() {
        $('#chat-resize').css('display', de.cResizableChat ? 'block' : 'none');
      },
      sShowNames: function() {
        3 = iq[de.sShowNames];
      },
      sShowSkins: function() {
        3 = iq[de.sShowSkins];
      },
      sMassType: function() {
        gc.massType = ir[de.sMassType];
      },
      sTextOutlines: function() {
        0 = it[de.sTextOutlines];
        for (var ab in ba.playerRegistry.bucket) {
          var ah = ba.playerRegistry.bucket[ab];
          if (ah.nameCache) {
            ah.nameCache.style.strokeThickness = 0;
          };
          ba.playerRegistry.updatePlayer(ah);
        };
        fu.buildSizeCache();
      },
      sQuality: function() {
        ;
        1 = iu[de.sQuality];
      },
      uiForegroundColor: function(ab) {
        if (ba) {
          ba.drawParty();
        };
        $('.fg-interface-color').css('color', ab);
        $('.interface-color').css('color', ab);
        $('.gota-btn').css('color', ab).css('border-color', ab);
        $('.popup-panel').css('color', ab);
        $('.main').css('color', ab);
        $('.main-bottom-stats').css('border-color', ab);
      },
      uiBackgroundColor: function(ab) {
        $('.hud-panel .interface-color').css('background-color', ab);
      },
      uiButtonColor: function(ab) {
        $('.gota-btn').css('background-color', ab);
      },
      uiBorderColor: function(ab) {
        $('.ui-pane').css('border-color', ab);
        $('#chat-tab-container').css('border-color', ab);
        $('.chat-tab').css('border-color', ab);
      },
      uiMenuBackgroundColor: function(ab) {
        $('.main-panel').css('background-color', ab);
        $('.popup-panel').css('background-color', ab);
        $('.options-container').css('background-color', ab);
      },
      uiMenuTitleBackgroundColor: function(ab) {
        $('.menu-title').css('background-color', ab);
      },
      uiMenuSubBackgroundColor: function(ab) {
        $('.menu-sub-bg').css('background-color', ab);
        $('.server-active').css('background-color', ab);
        $('#server-content').css('background-color', ab);
      },
      uiMenuSubBackground2Color: function(ab) {
        $('.menu-sub-bg2').css('background-color', ab);
        $('.server-table tbody').css('background-color', ab);
      },
      uiPartyLeaderColor: function(ab) {
        if (ba) {
          ba.drawParty();
        }
      },
      uiGameColorSuccess: function(ab) {
        $('#social-friends-online-count').css('color', ab);
      },
      uiGameBackgroundColor: function(ab) {
        document.body.style.background = ab;
      },
      uiGameBorderColor: function() {
        es();
      },
      rUiScale: function(ab) {
        de.rUiScale = Math.min(Math.max(ab, 0.5), 1.25);
        $('#uiScale').val(Number.parseFloat(de.rUiScale * 100).toFixed(0));
        $('.ui-scale').css('transform', 'scale(' + de.rUiScale + ')');
      },
      rAnimationDelay: function(ab) {
        de.rAnimationDelay = Math.min(Math.max(ab, 1), 250);
        $('#animationDelay').val(de.rAnimationDelay);
      },
      rViewDistance: function(ab) {
        de.rViewDistance = Math.min(Math.max(ab, 50), 150);
        $('#viewDistance').val(de.rViewDistance);
        ba.sendOptions();
      },
      rBorderSize: function(ab) {
        da.rBorderSize = Math.min(Math.max(ab, 1), 256);
        $('#borderSize').text(da.rBorderSize);
        es();
      },
      rBackgroundOpacity: function(ab) {
        da.rBackgroundOpacity = Math.min(Math.max(ab, 0), 1);
        $('#backgroundOpacity').text(Number.parseFloat(da.rBackgroundOpacity * 100).toFixed(0));
        document.getElementById('canvas-background').style.opacity = da.rBackgroundOpacity;
      },
      aCustomBackground: function(ab) {
        document.getElementById('canvas-background').style.backgroundImage = 'url(\'' + ab + '\')';
        document.getElementById('canvas-background').style.backgroundSize = '100% 100%';
      },
      aCustomSpike: function(af) {
        if (null) {
          null.destroy();
        };
        null = null;
        for (var ah in ba.bucket) {
          var ac = ba.bucket[ah];
          if (ac.type == 3) {
            ;
          }
        };
        if (af.length == 0) {
          return;
        };
        var ab = new Image();
        ab.crossOrigin = '';
        ab.addEventListener('load', function() {
          null = aj.Texture.from(ab);
        });
        ab.addEventListener('error', function() {
          ba.selfMsg('Unable to load custom theme virus.');
        });
        ab.src = af;
      },
      aCustomMother: function(af) {
        if (null) {
          null.destroy();
        };
        null = null;
        for (var ah in ba.bucket) {
          var ac = ba.bucket[ah];
          if (ac.type == 4) {
            ;
          }
        };
        if (af.length == 0) {
          return;
        };
        var ab = new Image();
        ab.crossOrigin = '';
        ab.addEventListener('load', function() {
          null = aj.Texture.from(ab);
        });
        ab.addEventListener('error', function() {
          ba.selfMsg('Unable to load custom theme mother cell.');
        });
        ab.src = af;
      }
    };

    function hv() {
      if (!de.cShowCoordinates) {
        $('#minimap-canvas').css({
          'border-top': '0'
        });
        $('#minimap-panel').css({
          height: '250px'
        });
      } else {
        $('#minimap-canvas').css({
          'border-top': '2px solid rgba(255, 255, 255, .2)'
        });
        $('#minimap-panel').css({
          height: '270px'
        });
      }
    }

    function iv() {
      iw();
      $('#btn-chg-ln').on('click', function() {
        if (!ce) {
          return;
        };
        var ah = prompt('Enter new locked name!');
        if (!ah) {
          return;
        };
        var ab = null;
        if (typeof ah !== 'string') {
          ab = 'Please enter a valid name!';
        };
        if (ah.length < 2) {
          ab = 'Locked names must be 2 or more characters long.';
        };
        if (ah.length > 20) {
          ab = 'Locked names must be 20 or less characters long.';
        };
        if (ab !== null) {
          alert(ab);
          return;
        };
        ah = ah.trim();
        if (confirm('You are about to change your locked name to: \'' + ah + '\'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?')) {
          ba.sendPacket(new bb.sendLockedNameChange(ah));
        }
      });
      $('#btn-updateSP').on('click', function() {
        fw();
      });
      $('#btn-subpanel-rules').on('click', function() {
        dl.rules = true;
        fb();
      });
    }

    function iw() {
      fb();
      $('#spNameColor').spectrum({
        color: dl.nameColor,
        showAlpha: false,
        showInput: true,
        preferredFormat: 'rgb'
      });
      $('#spChatColor').spectrum({
        showPaletteOnly: true,
        showPalette: true,
        color: fq[dl.chatColor],
        palette: fq
      });
      $('#spSkinName').val(dl.skinName);
      $('#spLowerName').prop('checked', dl.lowerName);
      $('#spEffect select').val(dl.effect);
      $('#spNameFont select').val(dl.nameFont);
    }

    function fw(af) {
      dl.skinName = $('#spSkinName').val().toLowerCase();
      dl.lowerName = $('#spLowerName').prop('checked');
      dl.nameColor = $('#spNameColor').spectrum('get').toRgb();
      var ah = $('#spChatColor').spectrum('get').toHexString().toUpperCase();
      var ab = 0;
      for (var ac = 0; ac < fq.length; ac++) {
        if (fq[ac] == ah) {
          ab = ac;
          break;
        }
      };
      dl.chatColor = ab;
      dl.effect = parseInt($('#spEffect').val());
      dl.nameFont = parseInt($('#spNameFont').val());
      ba.sendPacket(new bb.sendSubPanel(af));
    }

    function fb() {
      if (ce || ba.subPanelOverride) {
        $('#btn-cellpanel').prop('disabled', false);
        if (ce) {
          $('.subpanel-name-dashboard').css('display', '');
        } else {
          $('.subpanel-name-dashboard').css('display', 'none');
        };
        if (dl.rules) {
          $('#subpanel-rules').css('display', 'none');
          $('#subpanel-content').css('display', 'block');
        } else {
          $('#subpanel-content').css('display', 'none');
          $('#subpanel-rules').css('display', 'block');
        }
      } else {
        $('#btn-cellpanel').prop('disabled', true);
      }
    }

    function fx(ab) {
      if (!ba.accountListeners.loadSubPanel) {
        ba.accountListeners.loadSubPanel = firebase.firestore().collection('accounts').doc(ab).onSnapshot(ab => {
          if (!ab.exists || !ab.data().locked) {
            ce = false;
            if ($('#main-subpanel').css('display') !== 'none') {
              ah('main-servers');
            }
          } else {
            ce = true;
            $('#spLockedName').html(ab.data().name);
            if (ab.data().lastChange !== undefined) {
              $('#btn-chg-ln').attr('title', 'Last Changed: ' + new Date(ab.data().lastChange).toLocaleString());
            };
            if (ab.data().expiry !== null) {
              $('#spExpiry').html(new Date(ab.data().expiry.seconds * 1000).toLocaleString());
            } else {
              $('#spExpiry').html('Never');
            }
          };
          fb();
          ba.accountListeners.loadSubPanel();
          ba.accountListeners.loadSubPanel = null;
        }, ab => {
          ba.accountListeners.loadSubPanel();
          ba.accountListeners.loadSubPanel = null;
        });
      }
    }

    function dz(af, ah, ae, ab, ad, ac, bx, am, ag) {
      this.name = af;
      this.ip = ah;
      this.players = ae;
      this.bots = ab;
      this.playerText = ad;
      this.mode = ac;
      this.region = bx;
      this.ssl = am;
      this.order = ag;
    }

    function ea() {
      $('#servers-body-eu').html('');
      $('#servers-body-na').html('');
      $('#servers-body-ap').html('');
      for (var ab in cz) {
        for (var ah in cz[ab]) {
          var af = cz[ab][ah];
          var ag = af.bots > 0 ? ' title="Players: ' + af.players + '&#10;Bots: ' + af.bots + '"' : '';
          $('#servers-body-' + af.region).append('<tr id="s_' + af.name + '" class="server-row" server="' + af.name + '"><td class="server-table-name">' + af.name + '</td><td class="server-table-players"' + ag + '>' + af.playerText + '</td><td class="server-table-mode">' + af.mode + '</td></tr>');
        }
      };
      for (var ah in ac) {
        var af = ac[ah];
        $('#servers-body-' + af.region).prepend('<tr id="s_' + af.name + '" class="account-server server-row" server="' + af.name + '"><td class="server-table-name">' + af.name + '</td><td class="server-table-players">' + af.playerText + '</td><td class="server-table-mode">' + af.mode + '</td></tr>');
      };
      $('.server-row').on('click', function() {
        dx($(this).attr('server'));
      });
    }

    function ix(ab) {
      for (var ah in ac) {
        if (ab.toLowerCase() === ah.toLowerCase()) {
          return ac[ah];
        }
      };
      return null;
    }

    function dw(ab) {
      for (var ah in cz) {
        for (var ac in cz[ah]) {
          if (ac.toLowerCase() === ab.toLowerCase()) {
            return cz[ah][ac];
          }
        }
      };
      return null;
    }

    function dx(ab) {
      if (bl != null) {
        $('#s_' + bl.name).removeClass('server-selected');
      };
      bl = dw(ab) || (Object.keys(ac).length > 0 ? ix(ab) : null);
      if (bl != null) {
        $('#s_' + bl.name).addClass('server-selected');
      }
    }

    function dy(ab) {
      ab = ab.toLowerCase();
      var ah = $('#server-tab-' + ab);
      $('.server-active').css('background-color', 'inherit');
      $('#server-tab-container').children().removeClass('server-active');
      ah.addClass('server-active');
      $('.server-active').css('background-color', da.uiMenuSubBackgroundColor);
      $('#server-content').children().css('display', 'none');
      $('#servers-' + ab).css('display', 'block');
    }

    function af(ah, ae) {
      var af = 0;
      for (tab in de._ChatTabs) {
        var bx = de._ChatTabs[tab];
        if ((ah & bx.flags) != ah) {
          continue;
        };
        var ag = $('#chat-body-' + tab + ' tr').length;
        if (ag >= bx.maxMessages) {
          $('#chat-body-' + tab + ' tr:first-child').remove();
        };
        var ab = af > 0 ? ae.cloneNode(true) : ae;
        af++;
        var ad = document.createElement('tr');
        ad.appendChild(ab);
        document.getElementById('chat-body-' + tab).appendChild(ad);
        var ac = $('#chat-container-' + tab);
        if (ac[0].scrollHeight - ac[0].scrollTop < ac.outerHeight() + 150) {
          ac.scrollTop(ac[0].scrollHeight);
        }
      }
    }

    function hb(ab) {
      if (ab.length == 0) {
        return;
      } else {
        if (ab.charAt(0) == '/') {
          iy(ab);
        } else {
          ba.sendPacket(new bb.sendChat(ab, 0));
          hd('');
        }
      }
    }

    function hd(ab) {
      $('#chat-input').val(ab);
    }

    function ag(ab) {
      $('#chat-input').val($('#chat-input').val() + ab);
    }

    function iy(af) {
      var ag = af.split(' ');
      var ah = ag[0];
      var ab = ah.substring(1);
      hd('');
      var ac = false;
      Object.keys(hc).findIndex(ah => {
        if (hc[ah].triggers.findIndex(ah => {
            return ah.toUpperCase() === ab.toUpperCase();
          }) > -1 && ac == false) {
          hc[ah].action(ag.slice(1));
          ac = true;
          return;
        }
      });
      if (ac == false) {
        ba.selfMsg('Invalid command!');
      }
    }

    function eh() {
      var ah = $('#chat-tab-container');
      var ab = $('#chat-container');
      ah.empty();
      ab.empty();
      for (var ac in de._ChatTabs) {
        var af = de._ChatTabs[ac];
        if (af.name.length == 0) {
          af.name = 'Unnamed';
        };
        ah.append('<li class=\'chat-tab\' id=\'chat-tab-' + ac + '\' name=\'' + ac + '\'><span>' + af.name + '</span></li>');
        ab.append('<div class=\'chat-inner-container\' id=\'chat-container-' + ac + '\'><table class=\'chat-table\'><tbody id=\'chat-body-' + ac + '\'></tbody></table></div>');
      };
      $('.chat-tab').on('click', function() {
        iz($(this).attr('name'));
      }).css('border-color', da.uiBorderColor);
      if (dd >= 0 && dd < de._ChatTabs.length) {
        iz(dd);
      } else {
        iz(0);
      }
    }

    function ja() {
      for (var ab in de._ChatTabs) {
        var ah = de._ChatTabs[ab];
        if (!ah) {
          continue;
        };
        if (ah.name.length == 0) {
          ah.name = 'Unnamed';
        };
        var ac = $('#chat-tab-' + ab);
        if (ac) {
          ac.html('<span>' + ah.name + '</span>');
        }
      }
    }

    function iz(ab) {
      $('.chat-tab').removeClass('chat-active-tab');
      $('.chat-inner-container').removeClass('chat-active-container').css('display', 'none');
      dd = ab;
      var ah = de._ChatTabs[ab];
      if (!ah) {
        return;
      };
      $('#chat-tab-' + ab).addClass('chat-active-tab');
      $('#chat-container-' + ab).addClass('chat-active-container').css('display', 'block');
    }

    function fm(ac = 0) {
      var ab = $('#cte-tab-selector');
      ab.empty();
      for (var ah in de._ChatTabs) {
        ab.append('<option value=\'' + ah + '\'>' + de._ChatTabs[ah].name + '</option>');
      };
      ab.prop('selectedIndex', ac);
      ab.trigger('change');
    }

    function hi(ac) {
      var ae = $('#cte-tab-selector').val();;
      var ah = de._ChatTabs[ae];
      if (ah) {
        for (var af in ag) {
          ;
        }
      };
      $('#cte-tab-name').val('');
      for (var ad in jb) {
        var ab = (jb[ad] & 0) == jb[ad];
        $('#cte-type-' + ad.toLowerCase()).prop('checked', ab);
      };
      $('#cte-max-messages').val(0);
    }

    function hl(ab) {
      var af = $('#cte-tab-selector').val();
      var bx = de._ChatTabs[af];
      if (!bx) {
        return;
      };
      var ad = bx.name;
      var ae = $('#cte-tab-name').val();
      if (ae.length == 0) {
        return;
      };
      var ac = ae != ad;
      var ah = 0;
      var ag = parseInt($('#cte-max-messages').val());
      for (var am in jb) {
        if ($('#cte-type-' + am.toLowerCase()).prop('checked')) {
          ah += jb[am];
        }
      };
      bx.name = ae;
      bx.flags = ah;
      bx.maxMessages = ag;
      if (ac) {
        fm(af);
        ja();
      }
    }

    function hj() {
      ;
      de._ChatTabs.push(ab);
      fm(de._ChatTabs.length - 1);
      eh();
    }

    function hk() {
      var ab = $('#cte-tab-selector').val();
      var ah = de._ChatTabs[ab];
      if (!ah) {
        return;
      };
      de._ChatTabs.splice(ab, 1);
      fm();
      eh();
    }

    function jc(ag) {
      var ab = parseInt($('#cte-tab-selector').val());
      var af = de._ChatTabs[ab];
      if (!af) {
        return;
      };
      var ah;
      if (ag) {
        ah = ab - 1;
      } else {
        ah = ab + 1;
      };
      var ac = de._ChatTabs[ah];
      if (!ac) {
        return;
      };
      de._ChatTabs[ab] = ac;
      de._ChatTabs[ah] = af;
      fm(ah);
      ja();
      iz(ah);
    }
    var fp = function(ab) {
      jd(ab, this.innerText, this.dataset.playerId, -1);
    };
    var hu = function(ab) {
      var af = ab.offsetY;
      var ac = Math.floor(af / 20);
      if (af % 20 < 5) {
        return;
      };
      var ah = ba.party[ac];
      if (ah == null) {
        return;
      };
      jd(ab, ah.name, ah.id, ac);
    };

    function jd(ab, ac, ah, ag) {
      var af = document.getElementById('context-name');
      af.innerText = ac || 'An unnamed cell';
      bt.data('selected', ah);
      bt.data('party', ag);
      $('.context-action').css('display', 'none');
      if (ag == -1) {
        $('#menu-invite').css('display', 'block');
        $('#menu-whisper').css('display', 'block');
        $('#menu-block').css('display', 'block');
        $('#menu-profile').css('display', 'block');
      } else {
        $('#menu-whisper').css('display', 'block');
        $('#menu-profile').css('display', 'block');
        if (ba.isPartyLeader()) {
          $('#menu-pu_pr').css('display', 'block');
          $('#menu-promote').css('display', 'block');
          $('#menu-kick').css('display', 'block');
        }
      };
      if (ba.spectate) {
        $('#menu-spectate').css('display', 'block');
      };
      bt.css('display', 'block');
      bt.css('left', Math.min(ba.mouseRawX, window.innerWidth - bt.width()));
      bt.css('top', Math.min(ba.mouseRawY, window.innerHeight - bt.height()));
    }

    function ev(ah, ae, cl, en, db, ab, ag) {
      var ac = (cl - ba.serverData.border.left) / ba.serverData.border.width * ay.width;
      var af = (en - ba.serverData.border.top) / ba.serverData.border.height * ay.height;
      ah.beginPath();
      ah.arc(ac, af, db, 0, cq, false);
      ah.fillStyle = ab;
      ah.fill();
      if (ag) {
        var am = ah.measureText(ae).width / 2;
        var ad = ac - am;
        var bx = af - 5;
        ah.fillText(ae, ad, bx);
      }
    }

    function fc(ah) {
      var db = aq.pivot.x - ak.stage.position.x / ba.scale + ba.mouseRawX * 1 / ba.scale;
      var cl = aq.pivot.y - ak.stage.position.y / ba.scale + ba.mouseRawY * 1 / ba.scale;
      var bx = null;
      var ag;
      for (var ac in ba.bucket) {
        ag = ba.bucket[ac];
        if (ag.size < 25) {
          continue;
        };
        var am = ag.y - ag.size;
        var ab = ag.y + ag.size;
        var af = ag.x - ag.size;
        var ad = ag.x + ag.size;
        if (cl > ab) {
          continue;
        };
        if (cl < am) {
          continue;
        };
        if (db > ad) {
          continue;
        };
        if (db < af) {
          continue;
        };
        bx = ag;
        break;
      };
      if (bx != null && bx.playerId != 0 && (!ah || ah.target.id == 'canvas')) {
        var ae = ba.playerRegistry.getPlayer(bx.playerId);
        if (ae != null) {
          jd(ah, ae.name, bx.playerId, -1);
        }
      }
    }

    function ff(ab) {
      if (ab.css('display') == 'none') {
        ab.css('display', 'block');
        ab.animate({
          opacity: 1
        }, 500);
      }
    }

    function dt(ab) {
      if (ab.css('display') == 'block' && ab.css('opacity') == 1) {
        ab.animate({
          opacity: 0
        }, 500, function() {
          ab.css('display', 'none');
        });
      }
    }

    function ds(ab) {
      if (ab.css('display') == 'block' && ab.css('opacity') == 1) {
        dt(ab);
      } else {
        if (ab.css('display') == 'none') {
          ff(ab);
        }
      }
    }

    function ht() {
      $('.popup-panel').each(function() {
        dt($(this));
      });
    }

    function fa() {
      bp.show();
      if (ba.party.length == 0 || de.cHidePartyPanel) {
        cx.partyPanel.css('display', 'none');
      };
      if (de.cHideChat) {
        $('#chat-panel').css('display', 'none');
      };
      if (de.cHideMinimap) {
        $('#minimap-panel').css('display', 'none');
      }
    }

    function dr() {
      bp.hide();
    }

    function hs() {
      $('#guest').hide();
      $('#account-loader').show();
    }

    function je() {
      $('#authed').hide();
      $('#account-loader').hide();
      $('#no_cookie_consent').hide();
      $('#guest').show();
    }

    function hf(ab) {
      var ah = ab.attr('id');
      de[ah] = ab.prop('checked');
      hx(ah);
    }

    function hg(ab) {
      var ah = ab.attr('id');
      de[ah] = ab.val();
      hx(ah, ab.val());
    }

    function hh(ab) {
      var ah = ab.attr('id');
      hx(ah, ab.val());
    }

    function hx(ab, ah) {
      var aa = il[ab];
      if (aa != null) {
        aa(ah);
      }
    }

    function hn(aa, ab) {
      if (ab != null) {
        da[aa] = ab;
        hx(aa, ab);
      }
    }

    function ew() {
      if (!eg.consented) {
        return;
      };
      de.iChatWidth = $('#chat-panel').css('width');
      de.iChatHeight = $('#chat-panel').css('height');
      window.localStorage.setItem('options', JSON.stringify(de));
      window.localStorage.setItem('keybinds', JSON.stringify(df));
      window.localStorage.setItem('name', $('#name-box').val());
      window.localStorage.setItem('theme', JSON.stringify(da));
      window.localStorage.setItem('subpanel', JSON.stringify(dl));
    }

    function jf() {
      if (!eg.consented) {
        return;
      };
      var db = window.localStorage.getItem('theme');
      if (db) {
        jg(db);
      };
      var ag = window.localStorage.getItem('keybinds');
      if (ag) {
        ag = JSON.parse(ag);
        for (var ac in ag) {
          if (ag[ac] != null && Number.isInteger(ag[ac])) {
            df[ac] = ag[ac];
            hw($('#' + ac));
          }
        }
      };
      var ad = window.localStorage.getItem('options');
      if (ad) {
        ad = JSON.parse(ad);
        for (var af in de) {
          if (af in ad === false) {
            ad[af] = de[af];
          }
        }
      } else {
        ad = de;
      };
      for (var af in ad) {
        var ah = af.charAt(0);
        if (ah == 'c') {
          if (ad[af] == true) {
            var ab = $('#' + af);
            ab.prop('checked', ad[af]);
            hf(ab);
          }
        } else {
          if (ah == 's') {
            var bx = $('#' + af);
            bx.val(ad[af]);
            hg(bx);
          } else {
            if (ah == 'i') {
              de[af] = ad[af];
            } else {
              if (ah == 'r') {
                de[af] = ad[af];
                $('#' + af).val(de[af]);
                hh($('#' + af));
              } else {
                de[af] = ad[af];
              }
            }
          }
        }
      };
      $('#chat-panel').css('width', de.iChatWidth);
      $('#chat-panel').css('height', de.iChatHeight);
      if (!de.cThemeEnabled) {
        hx('cThemeEnabled');
      };
      var ae = window.localStorage.getItem('name');
      if (ae != null) {
        $('#name-box').val(ae);
      };
      var am = window.localStorage.getItem('subpanel');
      if (am) {
        am = JSON.parse(am);
        for (var af in am) {
          if (!am[af]) {
            continue;
          };
          if (am[af].length != 0) {
            dl[af] = am[af];
          }
        }
      };
      dl.lockedName = '';
      fb();
    }

    function im() {
      for (var ah in di) {
        var ab = ah.charAt(0);
        if (ab == 'r') {
          $('#' + ah).val(di[ah]);
          hh($('#' + ah));
        } else {
          if (ab == 'u') {
            da[ah] = di[ah];
            $('#' + ah).spectrum('set', da[ah]);
            hx(ah, da[ah]);
          } else {
            if (ab == 'a') {
              hn(ah, '');
            } else {
              da[ah] = di[ah];
            }
          }
        }
      };
      da._FoodColors = [];
    }

    function jg(ab) {
      try {
        var af = JSON.parse(ab);
        if (af.version == null || af.version != 2) {
          im();
          return;
        };
        for (var ac in af) {
          if (da[ac] != null && af[ac].length != 0) {
            da[ac] = af[ac];
            var ah = ac.charAt(0);
            if (ah == 'u') {
              $('#' + ac).spectrum('set', da[ac]);
              hx(ac, da[ac]);
            } else {
              if (ah == 'r') {
                $('#' + ac).val(da[ac]);
                hh($('#' + ac));
              } else {
                if (ah == 'a') {
                  hn(ac, da[ac]);
                }
              }
            }
          }
        }
      } catch (e) {
        im();
      } finally {
        hy();
      }
    }

    function hr(ab) {
      if (/\.(json)$/i.test(ab.name)) {
        var ah = new FileReader();
        ah.addEventListener('load', function() {
          if (!de.cThemeEnabled) {
            hm();
          };
          im();
          jg(this.result);
        }, false);
        ah.readAsText(ab);
      }
    }

    function hm() {
      $('#cThemeEnabled').prop('checked', true).trigger('change');
    }

    function fr(ac) {
      var af = ac.split(' ');
      var ah = '';
      var ag = null;
      for (var ab = 0; ab < af.length; ab++) {
        if (ab != 0) {
          ah += ' ';
        };
        ag = af[ab];
        if (bw[ag] != null) {
          if (ag.startsWith(':') && ag.endsWith(':')) {
            ag = ag.substring(1, ag.length - 1);
          };
          ah += '<img src="https://gota.io/emotes/' + ag + '.png" height="17" width="17" alt="' + ag + '">';
        } else {
          if (gifEmoteList[ag] != null) {
            if (ag.startsWith(':') && ag.endsWith(':')) {
              ag = ag.substring(1, ag.length - 1);
            };
            ah += '<img src="https://gota.io/emotes/gifs/' + ag + '.gif" height="17" width="17" alt="' + ag + '">';
          } else {
            ah += ag;
          }
        }
      };
      return ah;
    };
    var gi, gj;
    var gk = {
      0: new jh('Random', 'random', 0),
      1: new jh('Maximum Cells Upgrade', 'extracells', 1),
      2: new jh('Extra Consumable Slot', 'extraconsumable', 1),
      3: new jh('Merge', 'merge', 2),
      4: new jh('Grow', 'grow', 2),
      5: new jh('Speed', 'speed', 2),
      6: new jh('Shield', 'shield', 2),
      7: new jh('Virus', 'spike', 3),
      8: new jh('Disrupt', 'disrupt', 3),
      9: new jh('Teleport', 'teleport', 3),
      10: new jh('Disrupt', '_disrupt', 4),
      11: new jh('Silver', 'phoenix', 1),
      12: new jh('Consumable Shield', '_shield', 3),
      13: new jh('Magnet', 'magnet', 2),
      14: new jh('Decay', 'decay', 3),
      15: new jh('Decay', '_decay', 4)
    };

    function jh(ah, ab, ac) {
      this.name = ah;
      this.img = ab;
      this.type = ac;
      this.image = null;
      this.texture = null;
    }

    function ij() {
      for (var ah in gk) {
        var ab = gk[ah];
        var af = 'images/powerups/' + ab.img + '.png';
        var ac = new Image();
        ac.addEventListener('load', function(ab, ah) {
          ab.texture = aj.Texture.from(ah);
        }.bind(null, ab, ac));;
        ab.image = ac;
      };
      gj = aj.Texture.from('images/shield.png');
      gi = aj.Texture.from('images/debuff.png');
    }

    function ey() {
      this.passiveBuffs = {};
      this.passiveSortedBuffs = [];
      this.consumableBuffs = [];
      this.cache = null;
      this.nextCacheUpdate = 0;
      this.texture = null;
      this.bonusMaxCells = 0;
      this.onAddBuff = function(ac, af, ah) {
        var ab = null;
        var ag = gk[ac].type;
        if (ag != 3) {
          ab = this.passiveBuffs[ac];
          if (ab) {
            ab.update(af, ah);
          } else {
            ab = new fn(ac, af, ah);
            this.passiveBuffs[ac] = ab;
            this.sortPassiveBuffs();
          };
          this.onPassiveBuffsUpdate();
          this.markCacheForUpdate();
        } else {
          ab = new fn(ac, af, ah);
          this.consumableBuffs.push(ab);
          this.markCacheForUpdate();
        };
        if (ab) {
          ba.selfMsg('Recieved buff: ' + ab.powerup.name);
        }
      };
      this.onRemoveBuff = function(ac) {
        var ab = null;
        var af = gk[ac].type;
        if (af != 3) {
          ab = this.passiveBuffs[ac];
          if (ab) {
            delete this.passiveBuffs[ac];
            this.sortPassiveBuffs();
            this.markCacheForUpdate();
            this.onPassiveBuffsUpdate();
          }
        } else {
          for (var ah = 0; ah < this.consumableBuffs.length; ah++) {
            ab = this.consumableBuffs[ah];
            if (ab.id == ac) {
              this.consumableBuffs.splice(ah, 1);
              this.markCacheForUpdate();
              break;
            }
          }
        };
        if (ab) {
          ba.selfMsg('Lost buff: ' + ab.powerup.name);
        }
      };
      this.clearBuffs = function(af) {
        if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
          return;
        };
        var ac = af ? af : false;
        for (var ah in this.passiveBuffs) {
          var ab = this.passiveBuffs[ah];
          if (ac && ab.powerup.type == 1) {} else {
            delete this.passiveBuffs[ah];
          }
        };
        this.sortPassiveBuffs();
        this.onPassiveBuffsUpdate();
        this.consumableBuffs = [];
        this.markCacheForUpdate();
      };
      this.sortPassiveBuffs = function() {
        this.passiveSortedBuffs = [];
        if (this.passiveBuffs.length == 0) {
          return;
        };
        for (var ah in this.passiveBuffs) {
          var ab = this.passiveBuffs[ah];
          if (ab.powerup.type == 1) {
            this.passiveSortedBuffs.splice(0, 0, ah);
          } else {
            this.passiveSortedBuffs.push(ah);
          }
        }
      };
      this.onPassiveBuffsUpdate = function() {
        this.bonusMaxCells = 0;
        if (this.passiveBuffs[1] != null) {
          var ab = this.passiveBuffs[1];
          this.bonusMaxCells = ab.stack * 16;
        }
      };
      this.update = function() {
        if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
          av.visible = false;
          return;
        };
        if (Date.now() >= this.nextCacheUpdate) {
          this.updateCache();
          this.nextCacheUpdate = Date.now() + 1000;
        };
        if (!this.texture) {
          this.texture = aj.Texture.from(this.cache.canvas);
          av.texture = this.texture;
          av.anchor.set(0);
        };
        av.position.x = cc.width() + 20 - ak.stage.position.x;
        av.position.y = 15 - ak.stage.position.y;
        av.visible = true;
      };
      this.updateCache = function() {
        var ah = this.cache == null || this.cache.canvas == null ? document.createElement('canvas') : this.cache.canvas;
        var af = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
        ah.width = 55 * af;
        ah.height = 105;
        this.cache = ah.getContext('2d');
        this.cache.fillStyle = '#222';
        this.cache.font = 'bold 16pt Calibri';
        var ag = 0,
          ae = 0;
        for (var ac = 0; ac < this.passiveSortedBuffs.length; ac++) {
          var ab = this.passiveBuffs[this.passiveSortedBuffs[ac]];
          ab.draw(this.cache, ag, ae);
          ag += 55;
        };
        ag = 0;
        ae = 55;
        for (var ac = 0; ac < this.consumableBuffs.length; ac++) {
          var ab = this.consumableBuffs[ac];
          ab.draw(this.cache, ag, ae);
          ag += 55;
        };
        if (this.texture) {
          this.texture.update();
        };
        this.nextCacheUpdate = Date.now() + 1000;
      };
      this.markCacheForUpdate = function() {
        this.nextCacheUpdate = 0;
      };
    }
    const fo = Math.PI * 1.5;

    function fn(ah, ac, ab) {
      this.id = ah;
      this.powerup = gk[ah];
      this.startTime = Date.now();
      this.expireTime = ab;
      this.stack = ac;
      this.update = function(ah, ab) {
        this.startTime = Date.now();
        this.expireTime = ab;
        this.stack = ah;
      };
      this.getCooldown = function() {
        if (Date.now() >= this.expireTime) {
          return 2 * Math.PI;
        } else {
          var ah = this.expireTime - Date.now();
          var ac = this.expireTime - this.startTime;
          var ab = Math.min(ah / ac, 1) * 2;
          return ab * Math.PI;
        }
      };
      this.draw = function(ab, ah, ac) {
        ab.drawImage(this.powerup.image, ah, ac, 50, 50);
        if (this.stack > 1) {
          ab.fillStyle = '#000';
          ab.fillText(this.stack, ah + 35, ac + 17);
        };
        if (this.expireTime > 0) {
          ab.beginPath();
          ab.moveTo(ah + 25, ac + 25);
          ab.arc(ah + 25, ac + 25, 25, fo, fo - this.getCooldown(), false);
          ab.closePath();
          ab.globalAlpha = 0.75;
          ab.fillStyle = '#222';
          ab.fill();
          ab.globalAlpha = 1;
        }
      };
    }
    const ik = .hearts;
    var gh = [];

    function go() {
      this.delay = 0;
      this.frames = [];
      this.isGif = true;
      this.push = function(ab) {
        this.frames.push(ab);
      };
      this.getFrame = function(ab) {
        return this.frames[ab];
      };
      this.getLength = function() {
        return this.frames.length;
      };
      this.getTexture = function() {
        return this.getFrame(Math.floor(bc / this.delay) % this.getLength());
      };
      this.loadFromFrameData = function(bx) {
        if (bx.length === 0) {
          return;
        };
        const db = document.createElement('canvas');
        const cl = db.getContext('2d');
        const ac = document.createElement('canvas');
        const af = ac.getContext('2d');
        const ae = bx[0].getImage();
        this.delay = bx[0].frameInfo.delay * 10;
        db.width = ae.width;
        db.height = ae.height;;;
        for (const ad of bx) {
          cl.clearRect(0, 0, db.width, db.height);
          cl.drawImage(ac, 0, 0);
          const ab = ad.getImage();
          const ah = ab.getContext('2d');
          af.drawImage(ab, 0, 0);
          ah.clearRect(0, 0, ab.width, ab.height);
          ah.drawImage(ac, 0, 0);
          const {
            frameInfo
          } = ad;
          const {
            disposal
          } = frameInfo;
          if (disposal === 2) {
            af.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
          } else {
            if (disposal === 3) {
              af.clearRect(0, 0, ac.width, ac.height);
              af.drawImage(db, 0, 0);
            }
          };
          this.push(aj.Texture.from(ab));
        }
      };
    }

    function ji(ab) {
      for (var ah = ab.length - 1; ah > 0; ah--) {
        var ac = Math.floor(Math.random() * (ah + 1));
        var af = ab[ah];
        ab[ah] = ab[ac];
        ab[ac] = af;
      };
      return ab;
    }
    var jj = [];
    var jk = [];
    for (var jl = 0; jl < 180; jl++) {
      var jm = tinycolor({
        h: jl * 2,
        s: 97.25,
        v: 100
      });
      var jn = jm.toRgb();
      jj[jl] = (jn.r << 16) + (jn.g << 8) + jn.b;
      jk[jl] = jm.toHexString();
    };
    const ft = ji(jj.slice(0));
    const fv = ji(jk.slice(0));
    delete jj;
    delete jk;
    if (cy.enabled && cy.foodColors) {
      jo = function(ab) {
        return cy.foodColors[ab % cy.foodColors.length];
      };
    };
    const fq = [
      '#FFFFFF',
      '#FF9BDC',
      '#FF00FF',
      '#FF0000',
      '#C80000',
      '#FF6900',
      '#FFFF00',
      '#00FF00',
      '#008000',
      '#008080',
      '#00FFFF',
      '#0096FF',
      '#0000FF',
      '#CA48FA',
      '#8A2BE2',
      '#D2C878',
      '#8C4614'
    ];
    const gx = {
      ah: ab.titles[ah]
    };

    function en(ab) {
      if (ab === 0 || ab === ba.playerId) {
        return 'You cannot block that player.';
      };
      if (cl.includes(ab)) {
        delete cl[ab];
        return 'Unblocked player with ID: ' + ab;
      };
      cl.push(ab);
      return 'Blocked player with ID: ' + ab;
    }
    const hc = {
      whisper: {
        description: 'Whisper a player by ID',
        triggers: [
          'whisper',
          't',
          'w'
        ],
        action: function(ab) {
          var ah = parseInt(ab[0]);
          if (isNaN(ah)) {
            ba.selfMsg('Invalid player id.');
            return;
          };
          var ac = ab.slice(1).join(' ');
          if (ac.length != 0) {
            ba.sendPacket(new bb.sendWhisper(ah, ac));
          };
          hd('/t ' + ah + ' ');
        }
      },
      reply_whisper: {
        description: 'Reply to previous whisper',
        triggers: [
          'reply',
          'r'
        ],
        action: function(ab) {
          var ah = ab.join(' ');
          if (ah.length != 0) {
            ba.sendPacket(new bb.sendWhisper(0, ah));
          };
          hd('/r ');
        }
      },
      party_chat: {
        description: 'Send a message to other party members',
        triggers: [
          'party',
          'p'
        ],
        action: function(ab) {
          var ah = ab.join(' ');
          if (ah.length != 0) {
            ba.sendPacket(new bb.sendChat(ah, 1));
          };
          hd('/p ');
        }
      },
      invite: {
        description: 'Invite a player to the party',
        triggers: [
          'invite',
          'i'
        ],
        action: function(ab) {
          var ah = parseInt(ab[0]);
          if (!isNaN(ah)) {
            ba.sendPacket(new bb.sendPartyAction(0, ah));
          } else {
            ba.selfMsg('Invalid ID.');
          }
        }
      },
      leave: {
        description: 'Leave your current party',
        triggers: [
          'leave',
          'l'
        ],
        action: function(ab) {
          ba.sendPacket(new bb.sendPartyAction(3, 0));
        }
      },
      promote: {
        description: 'Promote a party member to leader',
        triggers: .promote,
        action: function(ab) {
          var ah = parseInt(ab[0]);
          if (!isNaN(ah)) {
            ba.sendPacket(new bb.sendPartyAction(2, ah));
          } else {
            ba.selfMsg('Invalid ID.');
          }
        }
      },
      kick: {
        description: 'Kick a player from the party',
        triggers: .kick,
        action: function(ab) {
          var ah = parseInt(ab[0]);
          if (!isNaN(ah)) {
            ba.sendPacket(new bb.sendPartyAction(1, ah));
          } else {
            ba.selfMsg('Invalid ID.');
          }
        }
      },
      clear: {
        description: 'Clear the chat',
        triggers: .clear,
        action: function(ab) {
          var ah = document.getElementById('chat-body');
          while (ah.firstChild != null) {
            ah.removeChild(ah.firstChild);
          }
        }
      },
      info: {
        description: 'Get your current ID',
        triggers: .info,
        action: function(ab) {
          if (ba.playerId > 0) {
            ba.selfMsg('Your id is ' + ba.playerId);
          } else {
            ba.selfMsg('You need to be connected to a server to use this command.');
          }
        }
      },
      scrimmenu: {
        description: 'Show the scrimmage menu',
        triggers: .scrimmenu,
        action: function(ab) {
          bs.css('display', bs.css('display') == 'none' ? 'block' : 'none');
        }
      },
      join: {
        description: 'Join a party with a code',
        triggers: [
          'join',
          'j'
        ],
        action: function(ab) {
          var ah = ab[0];
          if (ah != null && ah.length != 0) {
            ba.sendPacket(new bb.sendPartyJoin(ah));
          }
        }
      },
      private: {
        description: 'Set the party to private',
        triggers: .private,
        action: function(ab) {
          ba.sendPacket(new bb.sendPartyAction(4, 1));
        }
      },
      public: {
        description: 'Allow players to join the party without an invite',
        triggers: .public,
        action: function(ab) {
          ba.sendPacket(new bb.sendPartyAction(4, 0));
        }
      },
      reset_chat: {
        description: 'Reset chat size',
        triggers: .resetchat,
        action: function(ab) {
          $('#chat-panel').css('width', '360px');
          $('#chat-panel').css('height', '250px');
        }
      },
      reset_chat_tabs: {
        description: 'Reset chat tab settings',
        triggers: .resetchattabs,
        action: function(ab) {
          de._ChatTabs = JSON.parse(JSON.stringify(dc));
          fm();
          eh();
        }
      },
      spectate: {
        description: 'Spectate a player',
        triggers: [
          'spectate',
          's'
        ],
        action: function(ab) {
          var ah = parseInt(ab[0]);
          if (!isNaN(ah)) {
            ba.sendPacket(new bb.sendSpectate(ah));
          } else {
            ba.selfMsg('Invalid ID.');
          }
        }
      },
      disconnect: {
        description: 'Disconnect from the server',
        triggers: .disconnect,
        action: function(ab) {
          ba.disconnect();
        }
      },
      account: {
        description: 'Get Account UID',
        triggers: .account,
        action: function(ab) {
          if (ch === null) {
            ba.selfMsg('You are not logged in.');
            return;
          };
          ba.selfMsg('UID: ' + ch.uid);
        }
      },
      block: {
        description: 'Block or unblock a player by ID',
        triggers: [
          'block',
          'b'
        ],
        action: function(ab) {
          var ac = parseInt(ab[0]);
          if (!isNaN(ac)) {
            var ah = en(ac);
            ba.selfMsg(ah);
          }
        }
      }
    };
    const he = [
      '4Head',
      'BibleThump',
      'DansGame',
      'DatSheffy',
      'FailFish',
      'FeelsBadMan',
      'FeelsGoodMan',
      'FeelsMadMan',
      'GabeN',
      'HassanChop',
      'HeyGuys',
      'Kappa',
      'KappaPride',
      'Keepo',
      'Kreygasm',
      'NotLikeThis',
      'OMGScoots',
      'PJSalt',
      'PogChamp',
      'rekt',
      'rip',
      'SaltyCorn',
      'sodaC',
      'sodaHeyGuys',
      'sodaNOPE',
      'sodaW',
      'SwiftRage',
      'WutFace',
      'ResidentSleeper',
      'LUL',
      'MikuFail',
      'PepoHype',
      'KKona',
      'MeguFace',
      'AngryBork',
      'AngeryBOYE',
      'TohruFlex',
      'Sadness',
      'nou',
      'MarioFP'
    ];
    const ie = [
      'Ditto',
      'MichaelPls',
      'RareParrot',
      'PepePls',
      'RooNoticeMe',
      'PepeEyes',
      'EverythingsFine',
      'WeSmart',
      'PandaAww',
      'SleepyCat',
      'Clap'
    ];
    const fk = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ];
    const ib = [
      '',
      'MOUSE1',
      'MOUSE2',
      'MOUSE3',
      'MOUSE4',
      'MOUSE5',
      'HELP',
      '',
      'BACK_SPACE',
      'TAB',
      '',
      '',
      'CLEAR',
      'ENTER',
      'ENTER_SPECIAL',
      '',
      'SHIFT',
      'CONTROL',
      'ALT',
      'PAUSE',
      'CAPS_LOCK',
      'KANA',
      'EISU',
      'JUNJA',
      'FINAL',
      'HANJA',
      '',
      'ESCAPE',
      'CONVERT',
      'NONCONVERT',
      'ACCEPT',
      'MODECHANGE',
      'SPACE',
      'PAGE_UP',
      'PAGE_DOWN',
      'END',
      'HOME',
      'LEFT',
      'UP',
      'RIGHT',
      'DOWN',
      'SELECT',
      'PRINT',
      'EXECUTE',
      'PRINTSCREEN',
      'INSERT',
      'DELETE',
      '',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      'AT',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'OS_KEY',
      '',
      'CONTEXT_MENU',
      '',
      'SLEEP',
      'NUMPAD0',
      'NUMPAD1',
      'NUMPAD2',
      'NUMPAD3',
      'NUMPAD4',
      'NUMPAD5',
      'NUMPAD6',
      'NUMPAD7',
      'NUMPAD8',
      'NUMPAD9',
      'MULTIPLY',
      'ADD',
      'SEPARATOR',
      'SUBTRACT',
      'DECIMAL',
      'DIVIDE',
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'F9',
      'F10',
      'F11',
      'F12',
      'F13',
      'F14',
      'F15',
      'F16',
      'F17',
      'F18',
      'F19',
      'F20',
      'F21',
      'F22',
      'F23',
      'F24',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'NUM_LOCK',
      'SCROLL_LOCK',
      'WIN_OEM_FJ_JISHO',
      'WIN_OEM_FJ_MASSHOU',
      'WIN_OEM_FJ_TOUROKU',
      'WIN_OEM_FJ_LOYA',
      'WIN_OEM_FJ_ROYA',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'CIRCUMFLEX',
      'EXCLAMATION',
      'DOUBLE_QUOTE',
      'HASH',
      'DOLLAR',
      'PERCENT',
      'AMPERSAND',
      'UNDERSCORE',
      'OPEN_PAREN',
      'CLOSE_PAREN',
      'ASTERISK',
      'PLUS',
      'PIPE',
      'HYPHEN_MINUS',
      'OPEN_CURLY_BRACKET',
      'CLOSE_CURLY_BRACKET',
      'TILDE',
      '',
      '',
      '',
      '',
      'VOLUME_MUTE',
      'VOLUME_DOWN',
      'VOLUME_UP',
      '',
      '',
      'SEMICOLON',
      'EQUALS',
      'COMMA',
      'MINUS',
      'PERIOD',
      'SLASH',
      'BACK_QUOTE',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'OPEN_BRACKET',
      'BACK_SLASH',
      'CLOSE_BRACKET',
      'QUOTE',
      '',
      'META',
      'ALTGR',
      '',
      'WIN_ICO_HELP',
      'WIN_ICO_00',
      '',
      'WIN_ICO_CLEAR',
      '',
      '',
      'WIN_OEM_RESET',
      'WIN_OEM_JUMP',
      'WIN_OEM_PA1',
      'WIN_OEM_PA2',
      'WIN_OEM_PA3',
      'WIN_OEM_WSCTRL',
      'WIN_OEM_CUSEL',
      'WIN_OEM_ATTN',
      'WIN_OEM_FINISH',
      'WIN_OEM_COPY',
      'WIN_OEM_AUTO',
      'WIN_OEM_ENLW',
      'WIN_OEM_BACKTAB',
      'ATTN',
      'CRSEL',
      'EXSEL',
      'EREOF',
      'PLAY',
      'ZOOM',
      '',
      'PA1',
      'WIN_OEM_CLEAR',
      ''
    ];
    var ig = [
      'heart',
      'star',
      'home',
      'apple',
      'spiral',
      'dice',
      'chicken',
      'ghost',
      'burger',
      'bow',
      'cloud',
      'skull',
      'mug',
      'flower',
      'music',
      'checkmark',
      'clover',
      'crown',
      'fancy',
      'fish',
      'fire',
      'lightning',
      'paw',
      'duck',
      'snowflake',
      'bomb',
      'butterfly',
      'cherry',
      'watermelon',
      'cat',
      'cupid',
      'sword',
      'shield',
      'tornado',
      'radioactive',
      'rocket',
      'wave',
      'letter_a',
      'letter_b',
      'letter_c',
      'letter_d',
      'letter_e',
      'letter_f',
      'letter_g',
      'letter_h',
      'letter_i',
      'letter_j',
      'letter_k',
      'letter_l',
      'letter_m',
      'letter_n',
      'letter_o',
      'letter_p',
      'letter_q',
      'letter_r',
      'letter_s',
      'letter_t',
      'letter_u',
      'letter_v',
      'letter_w',
      'letter_x',
      'letter_y',
      'letter_z',
      'number_0',
      'number_1',
      'number_2',
      'number_3',
      'number_4',
      'number_5',
      'number_6',
      'number_7',
      'number_8',
      'number_9'
    ];
    var ge = [];
    var ii = null;
    const gf = [
      16708096,
      13294378,
      9356863,
      3847498,
      42578,
      42612,
      108702,
      43973,
      44527,
      36821,
      29371,
      21669,
      3027346,
      6696593,
      9578383,
      12393101,
      15532172,
      15468916,
      15537243,
      15538497,
      15538980,
      15951139,
      16225309,
      16761359
    ];
    const gg = gf.length * 100 - 1;

    function er(af) {
      if (af <= 0) {
        return '0:00';
      };
      var ab = Math.floor(af / 3600);
      var ah = Math.floor((af - ab * 3600) / 60);
      var ac = af - ab * 3600 - ah * 60;
      if (ah < 10 && ab > 0) {
        ah = '0' + ah;
      };
      if (ac < 10) {
        ac = '0' + ac;
      };
      return (ab > 0 ? ab + ':' : '') + ah + ':' + ac;
    }

    function gw(ah) {
      var ab = ah.toString().split('.');
      ab[0] = ab[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return ab.join('.');
    }

    function ih(af) {
      var ah = af.split('');
      for (var ac = 0; ac < ah.length; ac++) {
        var ab = ah[ac];
        if (ab == '_') {
          if (ac + 1 < ah.length) {
            ah[ac + 1] = ah[ac + 1].toUpperCase();
          };
          ah[ac] = ' ';
        };
        if (ac == 0) {
          ah[ac] = ah[ac].toUpperCase();
        }
      };
      return ah.join('');
    }

    function hz(ac) {
      if (ac.indexOf('#') === 0) {
        ac = ac.slice(1);
      };
      if (ac.length === 3) {
        ac = ac[0] + ac[0] + ac[1] + ac[1] + ac[2] + ac[2];
      };
      if (ac.length !== 6) {
        throw new Error('Invalid HEX color.');
      };
      var af = parseInt(ac.slice(0, 2), 16),
        ah = parseInt(ac.slice(2, 4), 16),
        ab = parseInt(ac.slice(4, 6), 16);
      return af * 0.299 + ah * 0.587 + ab * 0.114 > 186 ? '#000000' : '#FFFFFF';
    }

    function ho(ab) {
      if (ab.dataTransfer.items) {
        for (var ac = 0; ac < ab.dataTransfer.items.length; ac++) {
          if (ab.dataTransfer.items[ac].kind === 'file') {
            var ah = ab.dataTransfer.items[ac].getAsFile();
            return ah;
          }
        }
      } else {
        for (var ac = 0; ac < ab.dataTransfer.files.length; ac++) {
          return ab.dataTransfer.files[ac];
        }
      }
    }

    function hq(af, ah, ag) {
      var ac = new Blob([ah], {
        type: ag
      });
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(ac, af);
      } else {
        var ab = document.createElement('a'),
          ae = URL.createObjectURL(ac);
        ab.href = ae;
        ab.download = af;
        document.body.appendChild(ab);
        ab.click();
        setTimeout(function() {
          document.body.removeChild(ab);
          window.URL.revokeObjectURL(ae);
        }, 0);
      }
    }
    jp.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;;;;;;;;
    const gn = {
      ERROR: -1,
      NOT_LOADED: 0,
      LOADING: 1,
      LOADED: 2
    };;
    const et = {
      UNKNOWN: -1,
      ALIVE: 0,
      DEAD: 1,
      SPECTATE: 2
    };
    var fz = [
      'white',
      '#25f',
      '#f31',
      'green',
      'yellow',
      'purple',
      'orange'
    ];

    function jq(ah, ac, ab) {
      this.font = ah;
      this.size = ac;
      this.outlineColor = ab ? ab : '#000';
    }
    const jr = {
      0: new jq('Verdana', 54),
      1: new jq('ampad', 75),
      2: new jq('burnstown', 81),
      3: new jq('chlorinar', 75),
      4: new jq('Facon', 75),
      5: new jq('archistico', 75),
      6: new jq('breakaway', 81),
      7: new jq('conformity', 81),
      8: new jq('electroharmonix', 70),
      9: new jq('PWJoyeuxNoel', 70),
      10: new jq('leckerli-one', 75),
      101: new jq('IceCaps', 81, '#00c9ff'),
      102: new jq('BrazierFlame', 81, '#e25822')
    };
    const gm = jr[0];

    function gl(aa) {
      return aa > 0 && jr[aa] ? jr[aa] : gm;
    }
    for (var js in jr) {
      var jt = jr[js];
      var ju = new FontFaceObserver(jt.font);
      ju.load(null, 10000).then(() => {}, () => {});
      if (js > 0 && js < 64) {
        $('#spNameFont').append('<option value="' + js + '" style="font-family:' + jt.font + '">' + jt.font.charAt(0).toUpperCase() + jt.font.slice(1) + '</option>');
      }
    };

    function ek() {
      if (!eg.consented) {
        return;
      };
      var ah = localStorage.getItem('version');
      var ab = version.split('.');
      if (ah === null) {
        localStorage.setItem('version', version);
        return;
      };
      ah = ah.split('.');
      if (ab[0] != ah[0] || ab[1] != ah[1]) {
        localStorage.setItem('version', version);
        dt(bn);
        ff($('#popup-changelog'));
      }
    }
    $(window).focus(function() {
      co = true;
    });
    $(window).blur(function() {
      co = false;
    });

    function fy() {
      if (co) {
        return;
      };
      if (!('Notification' in window)) {
        return;
      };
      if (Notification.permission === 'granted') {
        var ab = new Notification('Your match has started.', {
          icon: 'https://gota.io/assets/images/favicon.png'
        });
      }
    }
    var eg = new jv();

    function jv() {
      this.consented = false;
      this.policyID = 'CP_0918_01';
      this.policyLink = 'https://gota.io/policies/privacy.html?v=' + this.policyID + '#cookies';
      this.consentOption = $('#cc_acceptCookies');
      this.consentCookie = {
        name: 'cookieConsent',
        value: 'yes+' + this.policyID,
        exdays: 730,
        path: '/web'
      };
      this.cookieBanner = {
        banner: $('#cookie-banner'),
        decline: $('#declineCookies'),
        accept: $('#acceptCookies'),
        handlersBound: false
      };
      this.init = function() {
        this.backwardsCompatable();
        this.consentOption.on('change', function(ab) {
          eg.consentHandler($(this).prop('checked'));
        });
        var ab = this.getConsentCookie();
        if (ab === this.consentCookie.value) {
          this.consentHandler(true);
          this.showCookieBanner(false);
        } else {
          this.consentHandler(false);
          this.showCookieBanner(true);
        }
      };
      this.consentHandler = function(ab) {
        this.consented = ab;
        aiptag.consented = ab;
        this.consentOption.prop('checked', ab);
        if (!ab) {
          this.deleteConsentCookie();
          if (firebase.auth().currentUser !== null) {
            firebase.auth().signOut().then(function() {}).catch(aa => {});
          };
          $('#authed').hide();
          $('#account-loader').hide();
          $('#guest').hide();
          $('#no_cookie_consent').show();
          this.showCookieBanner(true);
        } else {
          this.createConsentCookie();
          this.showCookieBanner(false);
          jf();
          iv();
          $('#no_cookie_consent').hide();
          if ($('#account-loader').css('display') !== 'none') {
            $('#guest').hide();
          } else {
            $('#guest').show();
          }
        }
      };
      this.showCookieBanner = function(ab) {
        if (ab) {
          if (!this.cookieBanner.handlersBound) {
            this.bindBannerHandlers();
            this.cookieBanner.handlersBound = true;
          };
          this.cookieBanner.banner.slideDown();
        } else {
          this.cookieBanner.banner.slideUp();
        }
      };
      this.bindBannerHandlers = function() {
        this.cookieBanner.decline.on('click', function(ab) {
          eg.consentHandler(false);
          eg.showCookieBanner(false);
        });
        this.cookieBanner.accept.on('click', function(ab) {
          eg.consentHandler(true);
          eg.showCookieBanner(false);
        });
        $('#cookie-banner .description').append(' <a href="' + this.policyLink + '" target="_blank">Our Cookie Policy!</a>');
      };
      this.createConsentCookie = function() {
        var ab = new Date();
        ab.setTime(ab.getTime() + this.consentCookie.exdays * 24 * 60 * 60 * 1000);
        var ah = 'expires=' + ab.toUTCString();
        document.cookie = this.consentCookie.name + '=' + this.consentCookie.value + ';' + ah + ';path=' + this.consentCookie.path + ';';
      };
      this.deleteConsentCookie = function() {
        document.cookie = this.consentCookie.name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + this.consentCookie.path + ';';
      };
      this.getConsentCookie = function() {
        var ag = this.consentCookie.name + '=';
        var ac = decodeURIComponent(document.cookie);
        var ah = ac.split(';');
        for (var af = 0; af < ah.length; af++) {
          var ab = ah[af];
          while (ab.charAt(0) == ' ') {
            ab = ab.substring(1);
          };
          if (ab.indexOf(ag) == 0) {
            return ab.substring(ag.length, ab.length);
          }
        };
        return false;
      };
      this.backwardsCompatable = function() {
        ;
        var ac = decodeURIComponent(document.cookie);
        var ah = ac.split(';');
        var ae = null;
        for (var af = 0; af < ah.length; af++) {
          var ab = ah[af];
          while (ab.charAt(0) == ' ') {
            ab = ab.substring(1);
          };
          if (ab.indexOf('cookieconsent_status=') == 0) {
            ae = ab.substring('cookieconsent_status='.length, ab.length);
          }
        };
        if (ae === 'allow') {
          this.createConsentCookie();
          document.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;';
        } else {
          document.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;';
        }
      };
    }
    var ha = new jw();

    function jw() {
      this.playCounter = 0;
      this.incrementPlay = function() {
        if (ce) {
          return false;
        };
        this.playCounter++;
        if (this.playCounter % 5 == 1) {
          return true;
        } else {
          return false;
        }
      };
    }

    function jx() {
      if (typeof aipPlayer != 'undefined') {
        aiptag.cmd.player.push(function() {
          adplayer = new aipPlayer({
            AD_WIDTH: 960,
            AD_HEIGHT: 540,
            AD_CENTERPLAYER: false,
            LOADING_TEXT: 'Advertisement Loading...',
            PREROLL_ELEM: document.getElementById('preroll'),
            AIP_COMPLETE: function() {
              if (!ba.spectate) {
                ba.play();
              } else {
                ba.spec();
              }
            }
          });
        });
      } else {}
    }
    jx();
    dq();
  }
  showSideMenu = ah;
  hideSideMenu = ac;
  ab('gota.io', 1, '');
  version = '3.6.4';;
  $(af);
}());
