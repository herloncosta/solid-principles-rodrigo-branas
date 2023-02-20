# SOLID Principles com Erick Wendel & Rodrigo Branas

## 5 princípios

## Flexível, menos rígido, menos frágil, mais fácil de manter e evoluir.

### 1 - SRP - Single Responsibility Principle

-   Separar coisas que MUDAM POR MOTIVOS DIFERENTES
-   Mover responsabilidades

### 2 - OCP - Open/Closed Principle

-   Devemos estar fechados para modificação e abertos para extensão

### 3 - Liskov - ubstitution Principle

-   Se S (Beer, Whisky, Water) é subclasse de T (Item), em um programa deve ser possível substituir instâncias de T (Item) por instâncias de S (Beer, Whisky, Water), <strong>SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA</strong>.
-   Pré-condições não podem ser fortalecidas.
-   Deixando de aceitar ENTRADAS que a superclasse considera válida.
-   Pós-condições não podem ser enfraquecidas.
-   Aceitando saídas mais AMPLAS.
-   Invariantes devem se manter consistentes.
-   Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido.

### 4 - ISP - Interface Segregation Principle

-   Cuidado com interfaces MUITO ABRANGENTES, não obrigue - subclasses a implementar métodos que elas não precisam.

### 5 - DIP - Dependency Inversion Principle

-   High-level modules should not depend on low-level modules
    (Módulos de alto nível não devem depender de módulos de baixo nível)
-   Both should depend on abstractions.
    (Ambos devem depender de abstrações)

Link da aula: [clique aqui](https://www.youtube.com/watch?v=GVo7KzO2agg&t=892s&ab_channel=ErickWendel)
