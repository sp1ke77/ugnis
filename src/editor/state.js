import { setState } from 'lape'

const defaultState = {
    loading: true,
    leftOpen: true,
    rightOpen: true,
    fullScreen: false,
    editorRightWidth: 425,
    editorLeftWidth: 200,
    subEditorWidth: 375,
    componentEditorPosition: { x: window.innerWidth - 799, y: 50 },
    appIsFrozen: true,
    selectedViewNode: {},
    selectedPipeId: '',
    selectedStateNode: {},
    selectedMenu: 'view', // view | state | events
    selectedViewSubMenu: 'props',
    hoveredComponent: '',
    hoveredViewWithoutDrag: '',
    editingTitleNodeId: '',
    viewFoldersClosed: {},
    draggedComponentView: null,
    draggedComponentState: {},
    hoveredPipe: null,
    hoveredViewNode: null,
    hoveredEvent: null,
    mousePosition: {},
    eventStack: [],
    currentDefinitionId: '',
    definitionList: {},
}
setState(defaultState)