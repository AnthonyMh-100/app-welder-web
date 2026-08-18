# Guía de arquitectura y convenciones

## 1. Separación de componentes

Los componentes deben mantenerse separados según su responsabilidad.

- Evitar componentes demasiado grandes.
- Cada componente debe tener una responsabilidad específica.
- Reutilizar componentes cuando tengan una función común.
- Evitar colocar lógica compleja directamente dentro del JSX.
- Separar componentes de UI de la lógica de negocio cuando sea necesario.

Ejemplo de organización:

```text
components/
├── ui/
├── layout/
├── forms/
└── shared/
```

---

## 2. Separación de carpetas

La estructura de carpetas debe facilitar la navegación y mantenimiento del proyecto.

Se debe evitar colocar todos los archivos en una única carpeta.

Una estructura recomendada:

```text
src/
├── app/
├── components/
├── hooks/
├── lib/
├── services/
├── types/
├── utils/
└── ...
```

Cada carpeta debe tener una responsabilidad clara.

---

## 3. App Router

Utilizar **App Router** para organizar las diferentes secciones y rutas de la aplicación.

Las rutas deben representar las secciones principales de la aplicación.

Ejemplo:

```text
app/
├── page.tsx
├── dashboard/
│   └── page.tsx
├── products/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
└── settings/
    └── page.tsx
```

Las funcionalidades relacionadas con una sección deben mantenerse cerca de su ruta cuando sea conveniente.

---

## 4. Tailwind CSS

Utilizar **Tailwind CSS** de forma consistente.

Buenas prácticas:

- Evitar CSS innecesario cuando Tailwind pueda resolver el problema.
- Evitar repetir grandes cantidades de clases.
- Utilizar componentes reutilizables para estilos repetidos.
- Mantener las clases organizadas y legibles.
- Utilizar las utilidades de Tailwind antes de crear estilos personalizados.

Ejemplo:

```tsx
<button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Guardar
</button>
```

---

## 5. Nombres de variables

Utilizar nombres descriptivos y consistentes.

### Variables

Utilizar `camelCase`.

```ts
const userName = "Anthony";
const productList = [];
const isAuthenticated = true;
```

Evitar nombres poco descriptivos:

```ts
const x = "...";
const data = "...";
const temp = "...";
```

cuando exista un nombre más específico.

---

## 6. Nombres de funciones

Las funciones deben utilizar `camelCase` y expresar claramente la acción que realizan.

Preferir nombres como:

```ts
getUserById();
createProduct();
updateUser();
deleteProduct();
calculateTotal();
validateForm();
```

Evitar:

```ts
user();
data();
process();
doSomething();
```

cuando sea posible utilizar un nombre más específico.

---

## 7. Hooks

Los hooks personalizados deben comenzar con `use`.

Ejemplo:

```ts
useAuth();
useProducts();
useDebounce();
useForm();
```

Ubicarlos dentro de:

```text
hooks/
```

cuando sean reutilizables en diferentes partes de la aplicación.

---

## 8. Utilidades

Las funciones auxiliares y reutilizables deben mantenerse separadas de los componentes.

Ejemplo:

```text
utils/
├── formatCurrency.ts
├── formatDate.ts
├── validation.ts
└── helpers.ts
```

Las funciones dentro de `utils` deben ser preferentemente independientes y reutilizables.

Ejemplo:

```ts
export function formatCurrency(value: number) {
  // ...
}
```

---

## 9. Programación funcional

El proyecto debe utilizar un enfoque de **programación funcional** siempre que sea apropiado.

Preferencias:

- Funciones puras.
- Inmutabilidad.
- Evitar modificar directamente los datos existentes.
- Utilizar `map`, `filter`, `reduce`, `find`, etc., cuando mejoren la claridad.
- Evitar estados globales innecesarios.
- Evitar efectos secundarios dentro de funciones que deberían ser puras.

Ejemplo:

```ts
const activeUsers = users.filter((user) => user.isActive);
```

En lugar de modificar directamente el arreglo original.

---

## 10. Principios generales

- Mantener responsabilidades separadas.
- Evitar duplicación de código.
- Priorizar reutilización.
- Mantener componentes pequeños y fáciles de entender.
- Utilizar nombres descriptivos.
- Mantener una estructura de carpetas consistente.
- Separar UI, lógica, servicios y utilidades.
- Evitar sobreingeniería.
- Priorizar código legible antes que código excesivamente compacto.

---

## 11. Funciones flecha

Preferir **funciones flecha** sobre la sintaxis `function` en la mayor parte posible del código.

Preferencias:

- Declarar funciones y hooks con `const nombre = (args) => { ... }`.
- Declarar componentes con `const Componente = () => { ... }`.
- Usar funciones flecha en callbacks (`map`, `filter`, `forEach`, eventos, timers, etc.).
- Solo usar `function` cuando sea estrictamente necesario (p. ej. `useSyncExternalStore` con snapshots estables o funciones requeridas por alguna API).

Ejemplo:

```ts
const formatCurrency = (value: number) => value.toFixed(2);

const getUserById = (id: string) => users.find((user) => user.id === id);

const doubleAll = (values: number[]) => values.map((value) => value * 2);
```

> **Nota:** Estas convenciones describen únicamente la estructura, organización y estilo de desarrollo del proyecto. No definen ni documentan el contenido o las funcionalidades específicas del proyecto.
