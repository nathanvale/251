import {MuiAlert} from "./styles/MuiAlert";
import {MuiAlertTitle} from "./styles/MuiAlertTitle";
import {MuiAppBar} from "./styles/MuiAppBar";
import {MuiBackdrop} from "./styles/MuiBackdrop";
import {MuiBreakpoints} from "./styles/MuiBreakpoints";
import {MuiButton} from "./styles/MuiButton";
import {MuiCheckbox} from "./styles/MuiCheckbox";
import {MuiCircularProgress} from "./styles/MuiCircularProgress";
import {MuiDialog, MuiDialogTitle, MuiDialogContent} from "./styles/MuiDialog";
import {MuiDivider} from "./styles/MuiDivider";
import {
  MuiExpansionPanel,
  MuiExpansionPanelSummary,
  MuiExpansionPanelDetails,
  MuiExpansionPanelActions,
} from "./styles/MuiExpansionPanel";
import {MuiFab} from "./styles/MuiFab";
import {MuiFormControl} from "./styles/MuiFormControl";
import {MuiFormControlLabel} from "./styles/MuiFormControlLabel";
import {MuiFormHelperText} from "./styles/MuiFormHelperText";
import {MuiFormLabel} from "./styles/MuiFormLabel";
import {MuiIcon} from "./styles/MuiIcon";
import {MuiIconButton} from "./styles/MuiIconButton";
import {MuiInput} from "./styles/MuiInput";
import {MuiInputAdornment} from "./styles/MuiInputAdornment";
import {MuiInputBase} from "./styles/MuiInputBase";
import {MuiInputLabel} from "./styles/MuiInputLabel";
import {MuiLink} from "./styles/MuiLink";
import {MuiPaper} from "./styles/MuiPaper";
import {MuiRadio} from "./styles/MuiRadio";
import {MuiSelect} from "./styles/MuiSelect";
import {MuiShadows} from "./styles/MuiShadows";
import {MuiSkeleton} from "./styles/MuiSkeleton";
import {MuiSnackbar} from "./styles/MuiSnackbar";
import {MuiSvgIcon} from "./styles/MuiSvgIcon";
import {
  MuiTable,
  MuiTableBody,
  MuiTableCell,
  MuiTableHead,
  MuiTableRow,
} from "./styles/MuiTable";
import {MuiTabs, MuiTab} from "./styles/MuiTab";
import {MuiTooltip} from "./styles/MuiTooltip";
import {MuiToggleButton} from "./styles/MuiToggleButton";
import {MuiToggleButtonGroup} from "./styles/MuiToggleButtonGroup";
import {MuiTypography} from "./styles/MuiTypography";

export const originRetailMUITheme = {
  // Breakpoint
  breakpoints: MuiBreakpoints,
  // Shadows
  shadows: MuiShadows,
  // Default props
  props: {
    MuiPaper: {
      square: true,
    },
    MuiTextField: {
      autoComplete: "false",
    },
  },
  // Component styling overrides
  overrides: {
    // Alert
    MuiAlert,
    // AlertTitle
    MuiAlertTitle,
    // App Bar
    MuiAppBar,
    // Backdrop
    MuiBackdrop,
    // Button
    MuiButton,
    // Checkbox
    MuiCheckbox,
    // Circular Progress
    MuiCircularProgress,
    // Dialog
    MuiDialog,
    // Dialog Content
    MuiDialogContent,
    // Divider
    MuiDivider,
    // Dialog Title
    MuiDialogTitle,
    // Expansion Panel
    MuiExpansionPanel,
    // Expansion Panel Actions
    MuiExpansionPanelActions,
    // Expansion Panel Details
    MuiExpansionPanelDetails,
    // Expansion Panel Summary
    MuiExpansionPanelSummary,
    // Fab
    MuiFab,
    // Form Control
    MuiFormControl,
    // Form Control Label
    MuiFormControlLabel,
    // Form Label
    MuiFormLabel,
    // FormH Helper Text
    MuiFormHelperText,
    // Icon
    MuiIcon,
    // IconButton
    MuiIconButton,
    // Input
    MuiInput,
    // Input Adornment
    MuiInputAdornment,
    // Input Base
    MuiInputBase,
    // Input Label
    MuiInputLabel,
    // Link
    MuiLink,
    // Paper
    MuiPaper,
    // Radio
    MuiRadio,
    // Select
    MuiSelect,
    // Skeleton
    MuiSkeleton,
    // Snackbar
    MuiSnackbar,
    // SVGIcon
    MuiSvgIcon,
    // Tab
    MuiTab,
    // Table
    MuiTable,
    // TableBody
    MuiTableBody,
    // TableCell
    MuiTableCell,
    // TableHead
    MuiTableHead,
    // TableRow
    MuiTableRow,
    // Tabs
    MuiTabs,
    // ToggleButton
    MuiToggleButton,
    // ToggleButtonGroup
    MuiToggleButtonGroup,
    // Tooltip
    MuiTooltip,
  },
  typography: MuiTypography,
};
