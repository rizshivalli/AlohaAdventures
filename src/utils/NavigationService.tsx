// RootNavigation.js

// Import necessary functions and components from the navigation library
import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList, StackNavigation} from 'types/RootStackParams';

// Create a reference to the navigation container
export const navigationRef = createNavigationContainerRef<StackNavigation>();

// Function to check if the navigation container is ready
const isNavigationMounted = () => {
  if (navigationRef.isReady()) {
    return true;
  } else {
    // Log a warning if the navigation container is not ready
    console.warn('NavigationService is not ready');
    return false;
  }
};

// Function to navigate to a specified route with optional parameters
export function navigate(routeName: keyof RootStackParamList, params?: object) {
  // Check if navigation is mounted before dispatching the navigation action
  isNavigationMounted() &&
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
}

// Function to replace the current route with a new one
export const replace = (name: string, params?: object) => {
  // Check if navigation is mounted before dispatching the replace action
  isNavigationMounted() &&
    navigationRef.dispatch(StackActions.replace(name, params));
};

// Function to push a new route onto the navigation stack
export function push(name: string, params?: object) {
  // Check if navigation is mounted before dispatching the push action
  isNavigationMounted() &&
    navigationRef.dispatch(StackActions.push(name, params));
}

// Function to pop a specified number of routes from the navigation stack
export function pop(count: number) {
  // Check if navigation is mounted before dispatching the pop action
  isNavigationMounted() && navigationRef.dispatch(StackActions.pop(count));
}

// Function to pop to the top of the navigation stack
export function popToTop() {
  // Check if navigation is mounted before dispatching the popToTop action
  isNavigationMounted() && navigationRef.dispatch(StackActions.popToTop());
}

// Function to go back to the previous screen
export function goBack() {
  // Check if navigation is mounted before dispatching the goBack action
  isNavigationMounted() && navigationRef.dispatch(CommonActions.goBack());
}

// Export the navigation functions and the navigationRef for use in the application
export default {
  navigationRef,
  navigate,
  goBack,
  push,
  pop,
  popToTop,
  replace,
};
