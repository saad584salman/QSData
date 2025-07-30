# QSData AI Agent Development Guide

## 🎯 Project Overview

QSData is a PERN stack application implementing a flexible Entity-Attribute-Value (EAV) pattern for dynamic data management, task workflows, and approval systems.

**Tech Stack:**
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Knex.js + Objection.js
- **Deployment**: Docker + Nginx + VPS

## 🏗️ Architecture Principles

### Database-First Development
- **Respect existing schema**: Do NOT modify database schema without explicit approval
- **EAV Pattern**: Entity-Attribute-Value system for flexible data modeling
- **Audit Trail**: All changes must be logged in ntity_property_logs
- **Materialized Views**: Use for optimized data exports

### TypeScript-First Approach
- **Strict Mode**: Always use strict: true in tsconfig
- **Type Safety**: No ny types without explicit justification
- **Interface Definitions**: Define interfaces for all data structures
- **Generic Types**: Use generics for reusable components

### Component Architecture
- **Atomic Design**: Build from atoms → molecules → organisms → templates → pages
- **Composition over Inheritance**: Prefer composition patterns
- **Single Responsibility**: Each component has one clear purpose
- **Props Interface**: Always define TypeScript interfaces for props

## 📁 File Structure Standards

`
src/
├── components/
│   ├── ui/           # Reusable UI components (atoms)
│   ├── forms/        # Form components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
├── types/            # TypeScript type definitions
├── services/         # API service functions
└── pages/            # Page components
`

## 🎨 Design Language & Theme System

### 🌓 Theme Architecture

QSData uses a comprehensive theme system that supports both light and dark modes with consistent design tokens.

#### Theme Provider Setup
`	ypescript
interface Theme {
  mode: 'light' | 'dark';
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  transitions: TransitionTokens;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
}
`

### 🎨 Color System

#### Light Mode Colors
`	ypescript
const lightColors = {
  primary: {
    50: '#eff6ff', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
  },
  neutral: {
    50: '#f8fafc', 500: '#64748b', 600: '#475569', 700: '#334155',
  },
  success: { 500: '#22c55e', 600: '#16a34a' },
  warning: { 500: '#f59e0b', 600: '#d97706' },
  error: { 500: '#ef4444', 600: '#dc2626' },
  background: {
    primary: '#ffffff', secondary: '#f8fafc', tertiary: '#f1f5f9',
  },
  text: {
    primary: '#0f172a', secondary: '#475569', tertiary: '#64748b',
  },
};
`

#### Dark Mode Colors
`	ypescript
const darkColors = {
  primary: lightColors.primary, // Same as light
  neutral: {
    50: '#0f172a', 100: '#1e293b', 200: '#334155', 300: '#475569',
    400: '#64748b', 500: '#94a3b8', 600: '#cbd5e1', 700: '#e2e8f0',
  },
  success: lightColors.success, warning: lightColors.warning, error: lightColors.error,
  background: {
    primary: '#0f172a', secondary: '#1e293b', tertiary: '#334155',
  },
  text: {
    primary: '#f8fafc', secondary: '#cbd5e1', tertiary: '#94a3b8',
  },
};
`

### 📝 Typography System

`	ypescript
const fonts = {
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
};

const fontSizes = {
  xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem',
  xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem',
};

const typography = {
  heading: {
    h1: 'text-4xl font-bold tracking-tight leading-tight',
    h2: 'text-3xl font-semibold tracking-tight leading-tight',
    h3: 'text-2xl font-semibold leading-snug',
    h4: 'text-xl font-medium leading-snug',
  },
  body: {
    large: 'text-lg leading-relaxed',
    medium: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
    caption: 'text-xs leading-relaxed',
  },
};
`

### 📏 Spacing System

`	ypescript
const spacing = {
  0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
  5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem',
};

const layout = {
  container: {
    sm: 'max-w-screen-sm', md: 'max-w-screen-md', lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl', '2xl': 'max-w-screen-2xl',
  },
  section: {
    xs: 'py-4', sm: 'py-6', md: 'py-8', lg: 'py-12', xl: 'py-16',
  },
};
`

### 🎭 Shadow System

`	ypescript
const lightShadows = {
  none: 'none', xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const darkShadows = {
  none: 'none', xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
};
`

### ⚡ Transition System

`	ypescript
const transitions = {
  duration: { fast: '150ms', normal: '250ms', slow: '350ms', slower: '500ms' },
  easing: {
    linear: 'linear', ease: 'ease', easeIn: 'ease-in',
    easeOut: 'ease-out', easeInOut: 'ease-in-out',
  },
  common: {
    all: 'all 250ms ease-in-out',
    colors: 'color 250ms ease-in-out, background-color 250ms ease-in-out',
    opacity: 'opacity 250ms ease-in-out',
    transform: 'transform 250ms ease-in-out',
  },
};
`

## 🧩 Component Design System

### Button Variants
`	ypescript
const buttonVariants = {
  primary: {
    light: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md',
    dark: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md',
  },
  secondary: {
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300',
    dark: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600',
  },
  ghost: {
    light: 'hover:bg-gray-100 text-gray-700',
    dark: 'hover:bg-gray-700 text-gray-300',
  },
  danger: {
    light: 'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md',
    dark: 'bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow-md',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg',
  },
};
`

### Card Variants
`	ypescript
const cardVariants = {
  default: {
    light: 'bg-white border border-gray-200 shadow-sm',
    dark: 'bg-gray-800 border border-gray-700 shadow-sm',
  },
  elevated: {
    light: 'bg-white border border-gray-200 shadow-md',
    dark: 'bg-gray-800 border border-gray-700 shadow-md',
  },
  outline: {
    light: 'border border-gray-200 bg-transparent',
    dark: 'border border-gray-700 bg-transparent',
  },
};
`

### Form Elements
`	ypescript
const formVariants = {
  input: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20',
  },
  select: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20',
  },
  textarea: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20',
  },
};
`

## 🎯 Theme Hook

`	ypescript
function useThemeStyles() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  
  return {
    colors: isDark ? darkColors : lightColors,
    button: (variant: keyof typeof buttonVariants) => 
      ${buttonVariants[variant][isDark ? 'dark' : 'light']} ,
    card: (variant: keyof typeof cardVariants) => 
      ${cardVariants[variant][isDark ? 'dark' : 'light']} rounded-lg p-6,
    input: (variant: keyof typeof formVariants.input) => 
      ${formVariants.input[isDark ? 'dark' : 'light']} rounded-md px-3 py-2,
    text: {
      primary: isDark ? 'text-gray-100' : 'text-gray-900',
      secondary: isDark ? 'text-gray-300' : 'text-gray-600',
      tertiary: isDark ? 'text-gray-400' : 'text-gray-500',
      inverse: isDark ? 'text-gray-900' : 'text-white',
    },
    bg: {
      primary: isDark ? 'bg-gray-900' : 'bg-white',
      secondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
      tertiary: isDark ? 'bg-gray-700' : 'bg-gray-100',
    },
    border: {
      primary: isDark ? 'border-gray-700' : 'border-gray-200',
      secondary: isDark ? 'border-gray-600' : 'border-gray-300',
    },
  };
}
`

## 🔧 TypeScript Standards

### Type Definitions

#### Database Models
`	ypescript
interface BaseEntity {
  id: number;
  created_at: string;
  updated_at?: string;
}

interface User extends BaseEntity {
  full_name: string;
  email: string;
  password_hash: string;
  role_id: number;
  office_id?: number;
  role?: Role;
  office?: Office;
}

interface Project extends BaseEntity {
  name: string;
  description?: string;
  created_by_id: number;
  created_by?: User;
  properties?: EntityProperty[];
}

interface EntityProperty extends BaseEntity {
  entity_type: string;
  entity_id: number;
  property_definition_id: number;
  string_value?: string;
  number_value?: number;
  date_value?: string;
  bool_value?: boolean;
  created_by_id: number;
  property_definition?: PropertyDefinition;
  created_by?: User;
}

interface Task extends BaseEntity {
  task_rule_id: number;
  entity_type: string;
  entity_id: number;
  assigned_to_user_id?: number;
  assigned_to_office_id?: number;
  due_date?: string;
  status: 'pending' | 'completed' | 'overdue';
  created_by_id: number;
  completed_by_id?: number;
  completed_at?: string;
  task_rule?: TaskRule;
  assigned_to_user?: User;
  assigned_to_office?: Office;
  created_by?: User;
  completed_by?: User;
}
`

#### API Response Types
`	ypescript
interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: 'success' | 'error';
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface AuthResponse {
  token: string;
  user: User;
  role: string;
}
`

#### Component Props
`	ypescript
interface FormProps<T> {
  initialData?: Partial<T>;
  onSubmit: (data: T) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
  errors?: Record<string, string>;
}

interface TableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  onRowClick?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  isLoading?: boolean;
  pagination?: PaginationProps;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
`

## 🗄️ Database Standards

### Schema Respect Rules
- **NO schema changes** without explicit approval
- **Use existing tables** and relationships
- **Follow EAV pattern** for dynamic properties
- **Maintain audit trails** in ntity_property_logs

### Query Patterns
`	ypescript
interface QueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

async function getProjects(options: QueryOptions): Promise<PaginatedResponse<Project>>;
async function getProject(id: number): Promise<Project>;
async function createProject(data: CreateProjectData): Promise<Project>;
async function updateProject(id: number, data: UpdateProjectData): Promise<Project>;
async function deleteProject(id: number): Promise<void>;

async function getEntityProperties(
  entityType: string,
  entityId: number
): Promise<EntityProperty[]>;
async function setEntityProperty(
  entityType: string,
  entityId: number,
  propertyKey: string,
  value: any
): Promise<EntityProperty>;
`

## 🔐 Security Standards

### Authentication
`	ypescript
interface JwtPayload {
  userId: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}
`

### Authorization
`	ypescript
enum UserRole {
  MASTER = 'master',
  ORIGINATOR = 'originator',
  REVIEWER = 'reviewer',
}

function hasPermission(user: User, permission: string): boolean;
function requirePermission(permission: string): Middleware;
`

## 🧪 Testing Standards

### Unit Tests
`	ypescript
describe('Button Component', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
`

### Integration Tests
`	ypescript
describe('Projects API', () => {
  it('creates a new project', async () => {
    const projectData = {
      name: 'Test Project',
      description: 'Test Description',
    };
    
    const response = await request(app)
      .post('/api/projects')
      .send(projectData)
      .expect(201);
    
    expect(response.body.data.name).toBe(projectData.name);
  });
});
`

## 🚀 Performance Standards

### React Optimization
`	ypescript
const ExpensiveComponent = React.memo<Props>(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }));
  }, [data]);
  
  const handleUpdate = useCallback((id: number) => {
    onUpdate(id);
  }, [onUpdate]);
  
  return <div>{/* component content */}</div>;
});

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}
`

### Database Optimization
`	ypescript
async function getProjectsWithProperties(options: QueryOptions): Promise<Project[]> {
  return await Project.query()
    .withGraphFetched('[properties.[propertyDefinition], createdBy]')
    .modify('filterByOptions', options)
    .orderBy('created_at', 'desc');
}
`

## 📝 Code Quality Standards

### ESLint Configuration
`json
{
  "extends": [
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "prefer-const": "error",
    "no-var": "error"
  }
}
`

### Prettier Configuration
`json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
`

## 🎯 Development Workflow

### Feature Development
1. **Create TypeScript interfaces** for all data structures
2. **Implement atomic components** following design system
3. **Add comprehensive tests** for all new functionality
4. **Update documentation** for new features
5. **Follow EAV pattern** for dynamic properties

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Components follow atomic design principles
- [ ] Tailwind classes are consistent with design system
- [ ] Database queries are optimized
- [ ] Tests are comprehensive
- [ ] No security vulnerabilities
- [ ] Performance considerations addressed

### Deployment Checklist
- [ ] All tests passing
- [ ] TypeScript compilation successful
- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] Security headers implemented
- [ ] Performance monitoring enabled

## 📱 Responsive Design

`	ypescript
const breakpoints = {
  sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
};

const responsive = {
  container: {
    sm: 'max-w-screen-sm', md: 'max-w-screen-md', lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl', '2xl': 'max-w-screen-2xl',
  },
  grid: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    },
  },
  spacing: {
    section: 'px-4 sm:px-6 lg:px-8',
    container: 'mx-auto px-4 sm:px-6 lg:px-8',
  },
};
`

## ♿ Accessibility Standards

`	ypescript
const accessibility = {
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  },
  srOnly: 'sr-only',
  highContrast: {
    light: 'contrast-more',
    dark: 'contrast-more',
  },
  reducedMotion: 'motion-reduce:transition-none',
};
`

## �� Usage Guidelines

### Theme Implementation
`	ypescript
const MyComponent: React.FC = () => {
  const styles = useThemeStyles();
  
  return (
    <div className={${styles.bg.primary} }>
      <button className={styles.button('primary')}>
        Click me
      </button>
    </div>
  );
};
`

### Consistent Spacing
`	ypescript
const Layout: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">Title</h1>
      </header>
      <main className="space-y-4">
        <section className="p-4">Content</section>
      </main>
    </div>
  );
};
`

---

**Remember**: This guide ensures consistency across all AI agents working on this project. Follow these standards strictly to maintain code quality and team productivity.

**File**: AI_AGENT_GUIDE.md
**Purpose**: Comprehensive development standards for QSData project
**Audience**: All AI agents working on this codebase
**Last Updated**: 2025-07-30
**Version**: 1.0.0
