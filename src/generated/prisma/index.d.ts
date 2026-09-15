
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model PrebuiltPC
 * 
 */
export type PrebuiltPC = $Result.DefaultSelection<Prisma.$PrebuiltPCPayload>
/**
 * Model PrebuiltPCComponent
 * 완제품 PC를 구성하는 개별 부품들 (다대다 관계의 조인 테이블)
 */
export type PrebuiltPCComponent = $Result.DefaultSelection<Prisma.$PrebuiltPCComponentPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 주문 항목. productId(개별 부품) 또는 prebuiltPCId(완제품) 중 정확히 하나만
 * 채워집니다 — Prisma 스키마 레벨에서는 이 상호배타 제약을 표현할 수 없으므로
 * Step 5의 주문 생성 로직에서 애플리케이션 레벨로 검증합니다.
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model MemberSession
 * 
 */
export type MemberSession = $Result.DefaultSelection<Prisma.$MemberSessionPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model MemberRateLimit
 * 
 */
export type MemberRateLimit = $Result.DefaultSelection<Prisma.$MemberRateLimitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CategoryCode: {
  CPU: 'CPU',
  MOTHERBOARD: 'MOTHERBOARD',
  RAM: 'RAM',
  GPU: 'GPU',
  STORAGE: 'STORAGE',
  PSU: 'PSU',
  CASE: 'CASE',
  COOLER: 'COOLER'
};

export type CategoryCode = (typeof CategoryCode)[keyof typeof CategoryCode]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CategoryCode = $Enums.CategoryCode

export const CategoryCode: typeof $Enums.CategoryCode

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prebuiltPC`: Exposes CRUD operations for the **PrebuiltPC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrebuiltPCS
    * const prebuiltPCS = await prisma.prebuiltPC.findMany()
    * ```
    */
  get prebuiltPC(): Prisma.PrebuiltPCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prebuiltPCComponent`: Exposes CRUD operations for the **PrebuiltPCComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrebuiltPCComponents
    * const prebuiltPCComponents = await prisma.prebuiltPCComponent.findMany()
    * ```
    */
  get prebuiltPCComponent(): Prisma.PrebuiltPCComponentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberSession`: Exposes CRUD operations for the **MemberSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberSessions
    * const memberSessions = await prisma.memberSession.findMany()
    * ```
    */
  get memberSession(): Prisma.MemberSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberRateLimit`: Exposes CRUD operations for the **MemberRateLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberRateLimits
    * const memberRateLimits = await prisma.memberRateLimit.findMany()
    * ```
    */
  get memberRateLimit(): Prisma.MemberRateLimitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Product: 'Product',
    PrebuiltPC: 'PrebuiltPC',
    PrebuiltPCComponent: 'PrebuiltPCComponent',
    Order: 'Order',
    OrderItem: 'OrderItem',
    MemberSession: 'MemberSession',
    CartItem: 'CartItem',
    MemberRateLimit: 'MemberRateLimit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "product" | "prebuiltPC" | "prebuiltPCComponent" | "order" | "orderItem" | "memberSession" | "cartItem" | "memberRateLimit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      PrebuiltPC: {
        payload: Prisma.$PrebuiltPCPayload<ExtArgs>
        fields: Prisma.PrebuiltPCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrebuiltPCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrebuiltPCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          findFirst: {
            args: Prisma.PrebuiltPCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrebuiltPCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          findMany: {
            args: Prisma.PrebuiltPCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>[]
          }
          create: {
            args: Prisma.PrebuiltPCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          createMany: {
            args: Prisma.PrebuiltPCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrebuiltPCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>[]
          }
          delete: {
            args: Prisma.PrebuiltPCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          update: {
            args: Prisma.PrebuiltPCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          deleteMany: {
            args: Prisma.PrebuiltPCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrebuiltPCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrebuiltPCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>[]
          }
          upsert: {
            args: Prisma.PrebuiltPCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCPayload>
          }
          aggregate: {
            args: Prisma.PrebuiltPCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrebuiltPC>
          }
          groupBy: {
            args: Prisma.PrebuiltPCGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrebuiltPCGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrebuiltPCCountArgs<ExtArgs>
            result: $Utils.Optional<PrebuiltPCCountAggregateOutputType> | number
          }
        }
      }
      PrebuiltPCComponent: {
        payload: Prisma.$PrebuiltPCComponentPayload<ExtArgs>
        fields: Prisma.PrebuiltPCComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrebuiltPCComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrebuiltPCComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          findFirst: {
            args: Prisma.PrebuiltPCComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrebuiltPCComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          findMany: {
            args: Prisma.PrebuiltPCComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>[]
          }
          create: {
            args: Prisma.PrebuiltPCComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          createMany: {
            args: Prisma.PrebuiltPCComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrebuiltPCComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>[]
          }
          delete: {
            args: Prisma.PrebuiltPCComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          update: {
            args: Prisma.PrebuiltPCComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          deleteMany: {
            args: Prisma.PrebuiltPCComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrebuiltPCComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrebuiltPCComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>[]
          }
          upsert: {
            args: Prisma.PrebuiltPCComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrebuiltPCComponentPayload>
          }
          aggregate: {
            args: Prisma.PrebuiltPCComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrebuiltPCComponent>
          }
          groupBy: {
            args: Prisma.PrebuiltPCComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrebuiltPCComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrebuiltPCComponentCountArgs<ExtArgs>
            result: $Utils.Optional<PrebuiltPCComponentCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      MemberSession: {
        payload: Prisma.$MemberSessionPayload<ExtArgs>
        fields: Prisma.MemberSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          findFirst: {
            args: Prisma.MemberSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          findMany: {
            args: Prisma.MemberSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>[]
          }
          create: {
            args: Prisma.MemberSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          createMany: {
            args: Prisma.MemberSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>[]
          }
          delete: {
            args: Prisma.MemberSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          update: {
            args: Prisma.MemberSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          deleteMany: {
            args: Prisma.MemberSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>[]
          }
          upsert: {
            args: Prisma.MemberSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberSessionPayload>
          }
          aggregate: {
            args: Prisma.MemberSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberSession>
          }
          groupBy: {
            args: Prisma.MemberSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberSessionCountArgs<ExtArgs>
            result: $Utils.Optional<MemberSessionCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      MemberRateLimit: {
        payload: Prisma.$MemberRateLimitPayload<ExtArgs>
        fields: Prisma.MemberRateLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberRateLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberRateLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          findFirst: {
            args: Prisma.MemberRateLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberRateLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          findMany: {
            args: Prisma.MemberRateLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>[]
          }
          create: {
            args: Prisma.MemberRateLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          createMany: {
            args: Prisma.MemberRateLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberRateLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>[]
          }
          delete: {
            args: Prisma.MemberRateLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          update: {
            args: Prisma.MemberRateLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          deleteMany: {
            args: Prisma.MemberRateLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberRateLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberRateLimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>[]
          }
          upsert: {
            args: Prisma.MemberRateLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRateLimitPayload>
          }
          aggregate: {
            args: Prisma.MemberRateLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberRateLimit>
          }
          groupBy: {
            args: Prisma.MemberRateLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberRateLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberRateLimitCountArgs<ExtArgs>
            result: $Utils.Optional<MemberRateLimitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    product?: ProductOmit
    prebuiltPC?: PrebuiltPCOmit
    prebuiltPCComponent?: PrebuiltPCComponentOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    memberSession?: MemberSessionOmit
    cartItem?: CartItemOmit
    memberRateLimit?: MemberRateLimitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    cartItems: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    cartItems?: boolean | UserCountOutputTypeCountCartItemsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cartItems: number
    orderItems: number
    prebuiltComponents: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    prebuiltComponents?: boolean | ProductCountOutputTypeCountPrebuiltComponentsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPrebuiltComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrebuiltPCComponentWhereInput
  }


  /**
   * Count Type PrebuiltPCCountOutputType
   */

  export type PrebuiltPCCountOutputType = {
    components: number
    orderItems: number
    cartItems: number
  }

  export type PrebuiltPCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | PrebuiltPCCountOutputTypeCountComponentsArgs
    orderItems?: boolean | PrebuiltPCCountOutputTypeCountOrderItemsArgs
    cartItems?: boolean | PrebuiltPCCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * PrebuiltPCCountOutputType without action
   */
  export type PrebuiltPCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCCountOutputType
     */
    select?: PrebuiltPCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrebuiltPCCountOutputType without action
   */
  export type PrebuiltPCCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrebuiltPCComponentWhereInput
  }

  /**
   * PrebuiltPCCountOutputType without action
   */
  export type PrebuiltPCCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * PrebuiltPCCountOutputType without action
   */
  export type PrebuiltPCCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailHash: string | null
    passwordHash: string | null
    name: string | null
    nameEncrypted: boolean | null
    loginId: string | null
    loginIdHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailHash: string | null
    passwordHash: string | null
    name: string | null
    nameEncrypted: boolean | null
    loginId: string | null
    loginIdHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailHash: number
    passwordHash: number
    name: number
    nameEncrypted: number
    loginId: number
    loginIdHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailHash?: true
    passwordHash?: true
    name?: true
    nameEncrypted?: true
    loginId?: true
    loginIdHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailHash?: true
    passwordHash?: true
    name?: true
    nameEncrypted?: true
    loginId?: true
    loginIdHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailHash?: true
    passwordHash?: true
    name?: true
    nameEncrypted?: true
    loginId?: true
    loginIdHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted: boolean
    loginId: string | null
    loginIdHash: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    name?: boolean
    nameEncrypted?: boolean
    loginId?: boolean
    loginIdHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    name?: boolean
    nameEncrypted?: boolean
    loginId?: boolean
    loginIdHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    name?: boolean
    nameEncrypted?: boolean
    loginId?: boolean
    loginIdHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailHash?: boolean
    passwordHash?: boolean
    name?: boolean
    nameEncrypted?: boolean
    loginId?: boolean
    loginIdHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailHash" | "passwordHash" | "name" | "nameEncrypted" | "loginId" | "loginIdHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$MemberSessionPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * AES-256-GCM으로 암호화된 값 (src/lib/encryption.ts, 평문으로 저장하지 않음)
       */
      email: string
      /**
       * HMAC-SHA256 조회용 해시. 로그인 시 이 컬럼으로 조회합니다
       * (email 컬럼은 암호화 시 매번 값이 달라져 등호 조회가 불가능합니다).
       */
      emailHash: string
      /**
       * bcrypt 해시. 평문 비밀번호는 어디에도 저장하지 않습니다.
       */
      passwordHash: string
      /**
       * AES-256-GCM; legacy rows marked with nameEncrypted=false until migrated.
       */
      name: string
      nameEncrypted: boolean
      loginId: string | null
      loginIdHash: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends User$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailHash: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly nameEncrypted: FieldRef<"User", 'Boolean'>
    readonly loginId: FieldRef<"User", 'String'>
    readonly loginIdHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    where?: MemberSessionWhereInput
    orderBy?: MemberSessionOrderByWithRelationInput | MemberSessionOrderByWithRelationInput[]
    cursor?: MemberSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberSessionScalarFieldEnum | MemberSessionScalarFieldEnum[]
  }

  /**
   * User.cartItems
   */
  export type User$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    code: $Enums.CategoryCode | null
    name: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    code: $Enums.CategoryCode | null
    name: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    code: $Enums.CategoryCode
    name: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: $Enums.CategoryCode
      name: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly code: FieldRef<"Category", 'CategoryCode'>
    readonly name: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    discountRate: number | null
    salesCount: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    discountRate: number | null
    salesCount: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    categoryId: string | null
    price: number | null
    discountRate: number | null
    description: string | null
    salesCount: number | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    categoryId: string | null
    price: number | null
    discountRate: number | null
    description: string | null
    salesCount: number | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    categoryId: number
    price: number
    discountRate: number
    images: number
    description: number
    marketingContent: number
    attributes: number
    salesCount: number
    stock: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    discountRate?: true
    salesCount?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    discountRate?: true
    salesCount?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    discountRate?: true
    description?: true
    salesCount?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    discountRate?: true
    description?: true
    salesCount?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    discountRate?: true
    images?: true
    description?: true
    marketingContent?: true
    attributes?: true
    salesCount?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate: number
    images: string[]
    description: string | null
    marketingContent: JsonValue | null
    attributes: JsonValue
    salesCount: number
    stock: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    discountRate?: boolean
    images?: boolean
    description?: boolean
    marketingContent?: boolean
    attributes?: boolean
    salesCount?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    prebuiltComponents?: boolean | Product$prebuiltComponentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    discountRate?: boolean
    images?: boolean
    description?: boolean
    marketingContent?: boolean
    attributes?: boolean
    salesCount?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    discountRate?: boolean
    images?: boolean
    description?: boolean
    marketingContent?: boolean
    attributes?: boolean
    salesCount?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    discountRate?: boolean
    images?: boolean
    description?: boolean
    marketingContent?: boolean
    attributes?: boolean
    salesCount?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "categoryId" | "price" | "discountRate" | "images" | "description" | "marketingContent" | "attributes" | "salesCount" | "stock" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    prebuiltComponents?: boolean | Product$prebuiltComponentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      prebuiltComponents: Prisma.$PrebuiltPCComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      categoryId: string
      /**
       * 원(KRW) 단위 정수 가격 (소수점 없음)
       */
      price: number
      /**
       * 0~100 사이 할인율(%). 할인 적용가 = price * (100 - discountRate) / 100
       */
      discountRate: number
      /**
       * 상품 사진 여러 장 (첫 번째 값이 목록/상세 대표 이미지로 쓰임).
       */
      images: string[]
      description: string | null
      /**
       * 상세 모달 "상품정보" 탭의 마케팅 카피(eyebrow/제목/본문/특징 3개/프로모).
       * "상세 스펙" 탭은 attributes를 그대로 표로 보여주므로 별도 필드가 필요
       * 없습니다. 형태 정의는 src/types/product-detail.ts의 MarketingContent 참고.
       */
      marketingContent: Prisma.JsonValue | null
      /**
       * 카테고리별로 형태가 다른 스펙(소켓, 용량, 와트수 등).
       * 형태 정의는 src/types/product-attributes.ts 참고.
       */
      attributes: Prisma.JsonValue
      salesCount: number
      stock: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prebuiltComponents<T extends Product$prebuiltComponentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$prebuiltComponentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly discountRate: FieldRef<"Product", 'Int'>
    readonly images: FieldRef<"Product", 'String[]'>
    readonly description: FieldRef<"Product", 'String'>
    readonly marketingContent: FieldRef<"Product", 'Json'>
    readonly attributes: FieldRef<"Product", 'Json'>
    readonly salesCount: FieldRef<"Product", 'Int'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.prebuiltComponents
   */
  export type Product$prebuiltComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    where?: PrebuiltPCComponentWhereInput
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    cursor?: PrebuiltPCComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrebuiltPCComponentScalarFieldEnum | PrebuiltPCComponentScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model PrebuiltPC
   */

  export type AggregatePrebuiltPC = {
    _count: PrebuiltPCCountAggregateOutputType | null
    _avg: PrebuiltPCAvgAggregateOutputType | null
    _sum: PrebuiltPCSumAggregateOutputType | null
    _min: PrebuiltPCMinAggregateOutputType | null
    _max: PrebuiltPCMaxAggregateOutputType | null
  }

  export type PrebuiltPCAvgAggregateOutputType = {
    price: number | null
    discountRate: number | null
    salesCount: number | null
  }

  export type PrebuiltPCSumAggregateOutputType = {
    price: number | null
    discountRate: number | null
    salesCount: number | null
  }

  export type PrebuiltPCMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discountRate: number | null
    salesCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrebuiltPCMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    discountRate: number | null
    salesCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrebuiltPCCountAggregateOutputType = {
    id: number
    name: number
    description: number
    images: number
    price: number
    discountRate: number
    salesCount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrebuiltPCAvgAggregateInputType = {
    price?: true
    discountRate?: true
    salesCount?: true
  }

  export type PrebuiltPCSumAggregateInputType = {
    price?: true
    discountRate?: true
    salesCount?: true
  }

  export type PrebuiltPCMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discountRate?: true
    salesCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrebuiltPCMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    discountRate?: true
    salesCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrebuiltPCCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    images?: true
    price?: true
    discountRate?: true
    salesCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrebuiltPCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrebuiltPC to aggregate.
     */
    where?: PrebuiltPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCS to fetch.
     */
    orderBy?: PrebuiltPCOrderByWithRelationInput | PrebuiltPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrebuiltPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrebuiltPCS
    **/
    _count?: true | PrebuiltPCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrebuiltPCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrebuiltPCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrebuiltPCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrebuiltPCMaxAggregateInputType
  }

  export type GetPrebuiltPCAggregateType<T extends PrebuiltPCAggregateArgs> = {
        [P in keyof T & keyof AggregatePrebuiltPC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrebuiltPC[P]>
      : GetScalarType<T[P], AggregatePrebuiltPC[P]>
  }




  export type PrebuiltPCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrebuiltPCWhereInput
    orderBy?: PrebuiltPCOrderByWithAggregationInput | PrebuiltPCOrderByWithAggregationInput[]
    by: PrebuiltPCScalarFieldEnum[] | PrebuiltPCScalarFieldEnum
    having?: PrebuiltPCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrebuiltPCCountAggregateInputType | true
    _avg?: PrebuiltPCAvgAggregateInputType
    _sum?: PrebuiltPCSumAggregateInputType
    _min?: PrebuiltPCMinAggregateInputType
    _max?: PrebuiltPCMaxAggregateInputType
  }

  export type PrebuiltPCGroupByOutputType = {
    id: string
    name: string
    description: string | null
    images: string[]
    price: number
    discountRate: number
    salesCount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PrebuiltPCCountAggregateOutputType | null
    _avg: PrebuiltPCAvgAggregateOutputType | null
    _sum: PrebuiltPCSumAggregateOutputType | null
    _min: PrebuiltPCMinAggregateOutputType | null
    _max: PrebuiltPCMaxAggregateOutputType | null
  }

  type GetPrebuiltPCGroupByPayload<T extends PrebuiltPCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrebuiltPCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrebuiltPCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrebuiltPCGroupByOutputType[P]>
            : GetScalarType<T[P], PrebuiltPCGroupByOutputType[P]>
        }
      >
    >


  export type PrebuiltPCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    price?: boolean
    discountRate?: boolean
    salesCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    components?: boolean | PrebuiltPC$componentsArgs<ExtArgs>
    orderItems?: boolean | PrebuiltPC$orderItemsArgs<ExtArgs>
    cartItems?: boolean | PrebuiltPC$cartItemsArgs<ExtArgs>
    _count?: boolean | PrebuiltPCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prebuiltPC"]>

  export type PrebuiltPCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    price?: boolean
    discountRate?: boolean
    salesCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prebuiltPC"]>

  export type PrebuiltPCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    price?: boolean
    discountRate?: boolean
    salesCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prebuiltPC"]>

  export type PrebuiltPCSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    price?: boolean
    discountRate?: boolean
    salesCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrebuiltPCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "images" | "price" | "discountRate" | "salesCount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["prebuiltPC"]>
  export type PrebuiltPCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | PrebuiltPC$componentsArgs<ExtArgs>
    orderItems?: boolean | PrebuiltPC$orderItemsArgs<ExtArgs>
    cartItems?: boolean | PrebuiltPC$cartItemsArgs<ExtArgs>
    _count?: boolean | PrebuiltPCCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrebuiltPCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrebuiltPCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrebuiltPCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrebuiltPC"
    objects: {
      components: Prisma.$PrebuiltPCComponentPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      images: string[]
      price: number
      discountRate: number
      salesCount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prebuiltPC"]>
    composites: {}
  }

  type PrebuiltPCGetPayload<S extends boolean | null | undefined | PrebuiltPCDefaultArgs> = $Result.GetResult<Prisma.$PrebuiltPCPayload, S>

  type PrebuiltPCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrebuiltPCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrebuiltPCCountAggregateInputType | true
    }

  export interface PrebuiltPCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrebuiltPC'], meta: { name: 'PrebuiltPC' } }
    /**
     * Find zero or one PrebuiltPC that matches the filter.
     * @param {PrebuiltPCFindUniqueArgs} args - Arguments to find a PrebuiltPC
     * @example
     * // Get one PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrebuiltPCFindUniqueArgs>(args: SelectSubset<T, PrebuiltPCFindUniqueArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrebuiltPC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrebuiltPCFindUniqueOrThrowArgs} args - Arguments to find a PrebuiltPC
     * @example
     * // Get one PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrebuiltPCFindUniqueOrThrowArgs>(args: SelectSubset<T, PrebuiltPCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrebuiltPC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCFindFirstArgs} args - Arguments to find a PrebuiltPC
     * @example
     * // Get one PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrebuiltPCFindFirstArgs>(args?: SelectSubset<T, PrebuiltPCFindFirstArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrebuiltPC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCFindFirstOrThrowArgs} args - Arguments to find a PrebuiltPC
     * @example
     * // Get one PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrebuiltPCFindFirstOrThrowArgs>(args?: SelectSubset<T, PrebuiltPCFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrebuiltPCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrebuiltPCS
     * const prebuiltPCS = await prisma.prebuiltPC.findMany()
     * 
     * // Get first 10 PrebuiltPCS
     * const prebuiltPCS = await prisma.prebuiltPC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prebuiltPCWithIdOnly = await prisma.prebuiltPC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrebuiltPCFindManyArgs>(args?: SelectSubset<T, PrebuiltPCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrebuiltPC.
     * @param {PrebuiltPCCreateArgs} args - Arguments to create a PrebuiltPC.
     * @example
     * // Create one PrebuiltPC
     * const PrebuiltPC = await prisma.prebuiltPC.create({
     *   data: {
     *     // ... data to create a PrebuiltPC
     *   }
     * })
     * 
     */
    create<T extends PrebuiltPCCreateArgs>(args: SelectSubset<T, PrebuiltPCCreateArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrebuiltPCS.
     * @param {PrebuiltPCCreateManyArgs} args - Arguments to create many PrebuiltPCS.
     * @example
     * // Create many PrebuiltPCS
     * const prebuiltPC = await prisma.prebuiltPC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrebuiltPCCreateManyArgs>(args?: SelectSubset<T, PrebuiltPCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrebuiltPCS and returns the data saved in the database.
     * @param {PrebuiltPCCreateManyAndReturnArgs} args - Arguments to create many PrebuiltPCS.
     * @example
     * // Create many PrebuiltPCS
     * const prebuiltPC = await prisma.prebuiltPC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrebuiltPCS and only return the `id`
     * const prebuiltPCWithIdOnly = await prisma.prebuiltPC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrebuiltPCCreateManyAndReturnArgs>(args?: SelectSubset<T, PrebuiltPCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrebuiltPC.
     * @param {PrebuiltPCDeleteArgs} args - Arguments to delete one PrebuiltPC.
     * @example
     * // Delete one PrebuiltPC
     * const PrebuiltPC = await prisma.prebuiltPC.delete({
     *   where: {
     *     // ... filter to delete one PrebuiltPC
     *   }
     * })
     * 
     */
    delete<T extends PrebuiltPCDeleteArgs>(args: SelectSubset<T, PrebuiltPCDeleteArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrebuiltPC.
     * @param {PrebuiltPCUpdateArgs} args - Arguments to update one PrebuiltPC.
     * @example
     * // Update one PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrebuiltPCUpdateArgs>(args: SelectSubset<T, PrebuiltPCUpdateArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrebuiltPCS.
     * @param {PrebuiltPCDeleteManyArgs} args - Arguments to filter PrebuiltPCS to delete.
     * @example
     * // Delete a few PrebuiltPCS
     * const { count } = await prisma.prebuiltPC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrebuiltPCDeleteManyArgs>(args?: SelectSubset<T, PrebuiltPCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrebuiltPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrebuiltPCS
     * const prebuiltPC = await prisma.prebuiltPC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrebuiltPCUpdateManyArgs>(args: SelectSubset<T, PrebuiltPCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrebuiltPCS and returns the data updated in the database.
     * @param {PrebuiltPCUpdateManyAndReturnArgs} args - Arguments to update many PrebuiltPCS.
     * @example
     * // Update many PrebuiltPCS
     * const prebuiltPC = await prisma.prebuiltPC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrebuiltPCS and only return the `id`
     * const prebuiltPCWithIdOnly = await prisma.prebuiltPC.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrebuiltPCUpdateManyAndReturnArgs>(args: SelectSubset<T, PrebuiltPCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrebuiltPC.
     * @param {PrebuiltPCUpsertArgs} args - Arguments to update or create a PrebuiltPC.
     * @example
     * // Update or create a PrebuiltPC
     * const prebuiltPC = await prisma.prebuiltPC.upsert({
     *   create: {
     *     // ... data to create a PrebuiltPC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrebuiltPC we want to update
     *   }
     * })
     */
    upsert<T extends PrebuiltPCUpsertArgs>(args: SelectSubset<T, PrebuiltPCUpsertArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrebuiltPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCCountArgs} args - Arguments to filter PrebuiltPCS to count.
     * @example
     * // Count the number of PrebuiltPCS
     * const count = await prisma.prebuiltPC.count({
     *   where: {
     *     // ... the filter for the PrebuiltPCS we want to count
     *   }
     * })
    **/
    count<T extends PrebuiltPCCountArgs>(
      args?: Subset<T, PrebuiltPCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrebuiltPCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrebuiltPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrebuiltPCAggregateArgs>(args: Subset<T, PrebuiltPCAggregateArgs>): Prisma.PrismaPromise<GetPrebuiltPCAggregateType<T>>

    /**
     * Group by PrebuiltPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrebuiltPCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrebuiltPCGroupByArgs['orderBy'] }
        : { orderBy?: PrebuiltPCGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrebuiltPCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrebuiltPCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrebuiltPC model
   */
  readonly fields: PrebuiltPCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrebuiltPC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrebuiltPCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    components<T extends PrebuiltPC$componentsArgs<ExtArgs> = {}>(args?: Subset<T, PrebuiltPC$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends PrebuiltPC$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, PrebuiltPC$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends PrebuiltPC$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, PrebuiltPC$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrebuiltPC model
   */
  interface PrebuiltPCFieldRefs {
    readonly id: FieldRef<"PrebuiltPC", 'String'>
    readonly name: FieldRef<"PrebuiltPC", 'String'>
    readonly description: FieldRef<"PrebuiltPC", 'String'>
    readonly images: FieldRef<"PrebuiltPC", 'String[]'>
    readonly price: FieldRef<"PrebuiltPC", 'Int'>
    readonly discountRate: FieldRef<"PrebuiltPC", 'Int'>
    readonly salesCount: FieldRef<"PrebuiltPC", 'Int'>
    readonly isActive: FieldRef<"PrebuiltPC", 'Boolean'>
    readonly createdAt: FieldRef<"PrebuiltPC", 'DateTime'>
    readonly updatedAt: FieldRef<"PrebuiltPC", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrebuiltPC findUnique
   */
  export type PrebuiltPCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPC to fetch.
     */
    where: PrebuiltPCWhereUniqueInput
  }

  /**
   * PrebuiltPC findUniqueOrThrow
   */
  export type PrebuiltPCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPC to fetch.
     */
    where: PrebuiltPCWhereUniqueInput
  }

  /**
   * PrebuiltPC findFirst
   */
  export type PrebuiltPCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPC to fetch.
     */
    where?: PrebuiltPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCS to fetch.
     */
    orderBy?: PrebuiltPCOrderByWithRelationInput | PrebuiltPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrebuiltPCS.
     */
    cursor?: PrebuiltPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCS.
     */
    distinct?: PrebuiltPCScalarFieldEnum | PrebuiltPCScalarFieldEnum[]
  }

  /**
   * PrebuiltPC findFirstOrThrow
   */
  export type PrebuiltPCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPC to fetch.
     */
    where?: PrebuiltPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCS to fetch.
     */
    orderBy?: PrebuiltPCOrderByWithRelationInput | PrebuiltPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrebuiltPCS.
     */
    cursor?: PrebuiltPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCS.
     */
    distinct?: PrebuiltPCScalarFieldEnum | PrebuiltPCScalarFieldEnum[]
  }

  /**
   * PrebuiltPC findMany
   */
  export type PrebuiltPCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCS to fetch.
     */
    where?: PrebuiltPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCS to fetch.
     */
    orderBy?: PrebuiltPCOrderByWithRelationInput | PrebuiltPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrebuiltPCS.
     */
    cursor?: PrebuiltPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCS.
     */
    distinct?: PrebuiltPCScalarFieldEnum | PrebuiltPCScalarFieldEnum[]
  }

  /**
   * PrebuiltPC create
   */
  export type PrebuiltPCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * The data needed to create a PrebuiltPC.
     */
    data: XOR<PrebuiltPCCreateInput, PrebuiltPCUncheckedCreateInput>
  }

  /**
   * PrebuiltPC createMany
   */
  export type PrebuiltPCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrebuiltPCS.
     */
    data: PrebuiltPCCreateManyInput | PrebuiltPCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrebuiltPC createManyAndReturn
   */
  export type PrebuiltPCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * The data used to create many PrebuiltPCS.
     */
    data: PrebuiltPCCreateManyInput | PrebuiltPCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrebuiltPC update
   */
  export type PrebuiltPCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * The data needed to update a PrebuiltPC.
     */
    data: XOR<PrebuiltPCUpdateInput, PrebuiltPCUncheckedUpdateInput>
    /**
     * Choose, which PrebuiltPC to update.
     */
    where: PrebuiltPCWhereUniqueInput
  }

  /**
   * PrebuiltPC updateMany
   */
  export type PrebuiltPCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrebuiltPCS.
     */
    data: XOR<PrebuiltPCUpdateManyMutationInput, PrebuiltPCUncheckedUpdateManyInput>
    /**
     * Filter which PrebuiltPCS to update
     */
    where?: PrebuiltPCWhereInput
    /**
     * Limit how many PrebuiltPCS to update.
     */
    limit?: number
  }

  /**
   * PrebuiltPC updateManyAndReturn
   */
  export type PrebuiltPCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * The data used to update PrebuiltPCS.
     */
    data: XOR<PrebuiltPCUpdateManyMutationInput, PrebuiltPCUncheckedUpdateManyInput>
    /**
     * Filter which PrebuiltPCS to update
     */
    where?: PrebuiltPCWhereInput
    /**
     * Limit how many PrebuiltPCS to update.
     */
    limit?: number
  }

  /**
   * PrebuiltPC upsert
   */
  export type PrebuiltPCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * The filter to search for the PrebuiltPC to update in case it exists.
     */
    where: PrebuiltPCWhereUniqueInput
    /**
     * In case the PrebuiltPC found by the `where` argument doesn't exist, create a new PrebuiltPC with this data.
     */
    create: XOR<PrebuiltPCCreateInput, PrebuiltPCUncheckedCreateInput>
    /**
     * In case the PrebuiltPC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrebuiltPCUpdateInput, PrebuiltPCUncheckedUpdateInput>
  }

  /**
   * PrebuiltPC delete
   */
  export type PrebuiltPCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    /**
     * Filter which PrebuiltPC to delete.
     */
    where: PrebuiltPCWhereUniqueInput
  }

  /**
   * PrebuiltPC deleteMany
   */
  export type PrebuiltPCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrebuiltPCS to delete
     */
    where?: PrebuiltPCWhereInput
    /**
     * Limit how many PrebuiltPCS to delete.
     */
    limit?: number
  }

  /**
   * PrebuiltPC.components
   */
  export type PrebuiltPC$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    where?: PrebuiltPCComponentWhereInput
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    cursor?: PrebuiltPCComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrebuiltPCComponentScalarFieldEnum | PrebuiltPCComponentScalarFieldEnum[]
  }

  /**
   * PrebuiltPC.orderItems
   */
  export type PrebuiltPC$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * PrebuiltPC.cartItems
   */
  export type PrebuiltPC$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * PrebuiltPC without action
   */
  export type PrebuiltPCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
  }


  /**
   * Model PrebuiltPCComponent
   */

  export type AggregatePrebuiltPCComponent = {
    _count: PrebuiltPCComponentCountAggregateOutputType | null
    _avg: PrebuiltPCComponentAvgAggregateOutputType | null
    _sum: PrebuiltPCComponentSumAggregateOutputType | null
    _min: PrebuiltPCComponentMinAggregateOutputType | null
    _max: PrebuiltPCComponentMaxAggregateOutputType | null
  }

  export type PrebuiltPCComponentAvgAggregateOutputType = {
    quantity: number | null
  }

  export type PrebuiltPCComponentSumAggregateOutputType = {
    quantity: number | null
  }

  export type PrebuiltPCComponentMinAggregateOutputType = {
    id: string | null
    prebuiltPCId: string | null
    productId: string | null
    quantity: number | null
  }

  export type PrebuiltPCComponentMaxAggregateOutputType = {
    id: string | null
    prebuiltPCId: string | null
    productId: string | null
    quantity: number | null
  }

  export type PrebuiltPCComponentCountAggregateOutputType = {
    id: number
    prebuiltPCId: number
    productId: number
    quantity: number
    _all: number
  }


  export type PrebuiltPCComponentAvgAggregateInputType = {
    quantity?: true
  }

  export type PrebuiltPCComponentSumAggregateInputType = {
    quantity?: true
  }

  export type PrebuiltPCComponentMinAggregateInputType = {
    id?: true
    prebuiltPCId?: true
    productId?: true
    quantity?: true
  }

  export type PrebuiltPCComponentMaxAggregateInputType = {
    id?: true
    prebuiltPCId?: true
    productId?: true
    quantity?: true
  }

  export type PrebuiltPCComponentCountAggregateInputType = {
    id?: true
    prebuiltPCId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type PrebuiltPCComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrebuiltPCComponent to aggregate.
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCComponents to fetch.
     */
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrebuiltPCComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrebuiltPCComponents
    **/
    _count?: true | PrebuiltPCComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrebuiltPCComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrebuiltPCComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrebuiltPCComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrebuiltPCComponentMaxAggregateInputType
  }

  export type GetPrebuiltPCComponentAggregateType<T extends PrebuiltPCComponentAggregateArgs> = {
        [P in keyof T & keyof AggregatePrebuiltPCComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrebuiltPCComponent[P]>
      : GetScalarType<T[P], AggregatePrebuiltPCComponent[P]>
  }




  export type PrebuiltPCComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrebuiltPCComponentWhereInput
    orderBy?: PrebuiltPCComponentOrderByWithAggregationInput | PrebuiltPCComponentOrderByWithAggregationInput[]
    by: PrebuiltPCComponentScalarFieldEnum[] | PrebuiltPCComponentScalarFieldEnum
    having?: PrebuiltPCComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrebuiltPCComponentCountAggregateInputType | true
    _avg?: PrebuiltPCComponentAvgAggregateInputType
    _sum?: PrebuiltPCComponentSumAggregateInputType
    _min?: PrebuiltPCComponentMinAggregateInputType
    _max?: PrebuiltPCComponentMaxAggregateInputType
  }

  export type PrebuiltPCComponentGroupByOutputType = {
    id: string
    prebuiltPCId: string
    productId: string
    quantity: number
    _count: PrebuiltPCComponentCountAggregateOutputType | null
    _avg: PrebuiltPCComponentAvgAggregateOutputType | null
    _sum: PrebuiltPCComponentSumAggregateOutputType | null
    _min: PrebuiltPCComponentMinAggregateOutputType | null
    _max: PrebuiltPCComponentMaxAggregateOutputType | null
  }

  type GetPrebuiltPCComponentGroupByPayload<T extends PrebuiltPCComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrebuiltPCComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrebuiltPCComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrebuiltPCComponentGroupByOutputType[P]>
            : GetScalarType<T[P], PrebuiltPCComponentGroupByOutputType[P]>
        }
      >
    >


  export type PrebuiltPCComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prebuiltPCId?: boolean
    productId?: boolean
    quantity?: boolean
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prebuiltPCComponent"]>

  export type PrebuiltPCComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prebuiltPCId?: boolean
    productId?: boolean
    quantity?: boolean
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prebuiltPCComponent"]>

  export type PrebuiltPCComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prebuiltPCId?: boolean
    productId?: boolean
    quantity?: boolean
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prebuiltPCComponent"]>

  export type PrebuiltPCComponentSelectScalar = {
    id?: boolean
    prebuiltPCId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type PrebuiltPCComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prebuiltPCId" | "productId" | "quantity", ExtArgs["result"]["prebuiltPCComponent"]>
  export type PrebuiltPCComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PrebuiltPCComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PrebuiltPCComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prebuiltPC?: boolean | PrebuiltPCDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PrebuiltPCComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrebuiltPCComponent"
    objects: {
      prebuiltPC: Prisma.$PrebuiltPCPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prebuiltPCId: string
      productId: string
      quantity: number
    }, ExtArgs["result"]["prebuiltPCComponent"]>
    composites: {}
  }

  type PrebuiltPCComponentGetPayload<S extends boolean | null | undefined | PrebuiltPCComponentDefaultArgs> = $Result.GetResult<Prisma.$PrebuiltPCComponentPayload, S>

  type PrebuiltPCComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrebuiltPCComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrebuiltPCComponentCountAggregateInputType | true
    }

  export interface PrebuiltPCComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrebuiltPCComponent'], meta: { name: 'PrebuiltPCComponent' } }
    /**
     * Find zero or one PrebuiltPCComponent that matches the filter.
     * @param {PrebuiltPCComponentFindUniqueArgs} args - Arguments to find a PrebuiltPCComponent
     * @example
     * // Get one PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrebuiltPCComponentFindUniqueArgs>(args: SelectSubset<T, PrebuiltPCComponentFindUniqueArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrebuiltPCComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrebuiltPCComponentFindUniqueOrThrowArgs} args - Arguments to find a PrebuiltPCComponent
     * @example
     * // Get one PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrebuiltPCComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, PrebuiltPCComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrebuiltPCComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentFindFirstArgs} args - Arguments to find a PrebuiltPCComponent
     * @example
     * // Get one PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrebuiltPCComponentFindFirstArgs>(args?: SelectSubset<T, PrebuiltPCComponentFindFirstArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrebuiltPCComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentFindFirstOrThrowArgs} args - Arguments to find a PrebuiltPCComponent
     * @example
     * // Get one PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrebuiltPCComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, PrebuiltPCComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrebuiltPCComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrebuiltPCComponents
     * const prebuiltPCComponents = await prisma.prebuiltPCComponent.findMany()
     * 
     * // Get first 10 PrebuiltPCComponents
     * const prebuiltPCComponents = await prisma.prebuiltPCComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prebuiltPCComponentWithIdOnly = await prisma.prebuiltPCComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrebuiltPCComponentFindManyArgs>(args?: SelectSubset<T, PrebuiltPCComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrebuiltPCComponent.
     * @param {PrebuiltPCComponentCreateArgs} args - Arguments to create a PrebuiltPCComponent.
     * @example
     * // Create one PrebuiltPCComponent
     * const PrebuiltPCComponent = await prisma.prebuiltPCComponent.create({
     *   data: {
     *     // ... data to create a PrebuiltPCComponent
     *   }
     * })
     * 
     */
    create<T extends PrebuiltPCComponentCreateArgs>(args: SelectSubset<T, PrebuiltPCComponentCreateArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrebuiltPCComponents.
     * @param {PrebuiltPCComponentCreateManyArgs} args - Arguments to create many PrebuiltPCComponents.
     * @example
     * // Create many PrebuiltPCComponents
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrebuiltPCComponentCreateManyArgs>(args?: SelectSubset<T, PrebuiltPCComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrebuiltPCComponents and returns the data saved in the database.
     * @param {PrebuiltPCComponentCreateManyAndReturnArgs} args - Arguments to create many PrebuiltPCComponents.
     * @example
     * // Create many PrebuiltPCComponents
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrebuiltPCComponents and only return the `id`
     * const prebuiltPCComponentWithIdOnly = await prisma.prebuiltPCComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrebuiltPCComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, PrebuiltPCComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrebuiltPCComponent.
     * @param {PrebuiltPCComponentDeleteArgs} args - Arguments to delete one PrebuiltPCComponent.
     * @example
     * // Delete one PrebuiltPCComponent
     * const PrebuiltPCComponent = await prisma.prebuiltPCComponent.delete({
     *   where: {
     *     // ... filter to delete one PrebuiltPCComponent
     *   }
     * })
     * 
     */
    delete<T extends PrebuiltPCComponentDeleteArgs>(args: SelectSubset<T, PrebuiltPCComponentDeleteArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrebuiltPCComponent.
     * @param {PrebuiltPCComponentUpdateArgs} args - Arguments to update one PrebuiltPCComponent.
     * @example
     * // Update one PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrebuiltPCComponentUpdateArgs>(args: SelectSubset<T, PrebuiltPCComponentUpdateArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrebuiltPCComponents.
     * @param {PrebuiltPCComponentDeleteManyArgs} args - Arguments to filter PrebuiltPCComponents to delete.
     * @example
     * // Delete a few PrebuiltPCComponents
     * const { count } = await prisma.prebuiltPCComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrebuiltPCComponentDeleteManyArgs>(args?: SelectSubset<T, PrebuiltPCComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrebuiltPCComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrebuiltPCComponents
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrebuiltPCComponentUpdateManyArgs>(args: SelectSubset<T, PrebuiltPCComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrebuiltPCComponents and returns the data updated in the database.
     * @param {PrebuiltPCComponentUpdateManyAndReturnArgs} args - Arguments to update many PrebuiltPCComponents.
     * @example
     * // Update many PrebuiltPCComponents
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrebuiltPCComponents and only return the `id`
     * const prebuiltPCComponentWithIdOnly = await prisma.prebuiltPCComponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrebuiltPCComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, PrebuiltPCComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrebuiltPCComponent.
     * @param {PrebuiltPCComponentUpsertArgs} args - Arguments to update or create a PrebuiltPCComponent.
     * @example
     * // Update or create a PrebuiltPCComponent
     * const prebuiltPCComponent = await prisma.prebuiltPCComponent.upsert({
     *   create: {
     *     // ... data to create a PrebuiltPCComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrebuiltPCComponent we want to update
     *   }
     * })
     */
    upsert<T extends PrebuiltPCComponentUpsertArgs>(args: SelectSubset<T, PrebuiltPCComponentUpsertArgs<ExtArgs>>): Prisma__PrebuiltPCComponentClient<$Result.GetResult<Prisma.$PrebuiltPCComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrebuiltPCComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentCountArgs} args - Arguments to filter PrebuiltPCComponents to count.
     * @example
     * // Count the number of PrebuiltPCComponents
     * const count = await prisma.prebuiltPCComponent.count({
     *   where: {
     *     // ... the filter for the PrebuiltPCComponents we want to count
     *   }
     * })
    **/
    count<T extends PrebuiltPCComponentCountArgs>(
      args?: Subset<T, PrebuiltPCComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrebuiltPCComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrebuiltPCComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrebuiltPCComponentAggregateArgs>(args: Subset<T, PrebuiltPCComponentAggregateArgs>): Prisma.PrismaPromise<GetPrebuiltPCComponentAggregateType<T>>

    /**
     * Group by PrebuiltPCComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrebuiltPCComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrebuiltPCComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrebuiltPCComponentGroupByArgs['orderBy'] }
        : { orderBy?: PrebuiltPCComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrebuiltPCComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrebuiltPCComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrebuiltPCComponent model
   */
  readonly fields: PrebuiltPCComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrebuiltPCComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrebuiltPCComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prebuiltPC<T extends PrebuiltPCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrebuiltPCDefaultArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrebuiltPCComponent model
   */
  interface PrebuiltPCComponentFieldRefs {
    readonly id: FieldRef<"PrebuiltPCComponent", 'String'>
    readonly prebuiltPCId: FieldRef<"PrebuiltPCComponent", 'String'>
    readonly productId: FieldRef<"PrebuiltPCComponent", 'String'>
    readonly quantity: FieldRef<"PrebuiltPCComponent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrebuiltPCComponent findUnique
   */
  export type PrebuiltPCComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCComponent to fetch.
     */
    where: PrebuiltPCComponentWhereUniqueInput
  }

  /**
   * PrebuiltPCComponent findUniqueOrThrow
   */
  export type PrebuiltPCComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCComponent to fetch.
     */
    where: PrebuiltPCComponentWhereUniqueInput
  }

  /**
   * PrebuiltPCComponent findFirst
   */
  export type PrebuiltPCComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCComponent to fetch.
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCComponents to fetch.
     */
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrebuiltPCComponents.
     */
    cursor?: PrebuiltPCComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCComponents.
     */
    distinct?: PrebuiltPCComponentScalarFieldEnum | PrebuiltPCComponentScalarFieldEnum[]
  }

  /**
   * PrebuiltPCComponent findFirstOrThrow
   */
  export type PrebuiltPCComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCComponent to fetch.
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCComponents to fetch.
     */
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrebuiltPCComponents.
     */
    cursor?: PrebuiltPCComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCComponents.
     */
    distinct?: PrebuiltPCComponentScalarFieldEnum | PrebuiltPCComponentScalarFieldEnum[]
  }

  /**
   * PrebuiltPCComponent findMany
   */
  export type PrebuiltPCComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter, which PrebuiltPCComponents to fetch.
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrebuiltPCComponents to fetch.
     */
    orderBy?: PrebuiltPCComponentOrderByWithRelationInput | PrebuiltPCComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrebuiltPCComponents.
     */
    cursor?: PrebuiltPCComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrebuiltPCComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrebuiltPCComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrebuiltPCComponents.
     */
    distinct?: PrebuiltPCComponentScalarFieldEnum | PrebuiltPCComponentScalarFieldEnum[]
  }

  /**
   * PrebuiltPCComponent create
   */
  export type PrebuiltPCComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a PrebuiltPCComponent.
     */
    data: XOR<PrebuiltPCComponentCreateInput, PrebuiltPCComponentUncheckedCreateInput>
  }

  /**
   * PrebuiltPCComponent createMany
   */
  export type PrebuiltPCComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrebuiltPCComponents.
     */
    data: PrebuiltPCComponentCreateManyInput | PrebuiltPCComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrebuiltPCComponent createManyAndReturn
   */
  export type PrebuiltPCComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * The data used to create many PrebuiltPCComponents.
     */
    data: PrebuiltPCComponentCreateManyInput | PrebuiltPCComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrebuiltPCComponent update
   */
  export type PrebuiltPCComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a PrebuiltPCComponent.
     */
    data: XOR<PrebuiltPCComponentUpdateInput, PrebuiltPCComponentUncheckedUpdateInput>
    /**
     * Choose, which PrebuiltPCComponent to update.
     */
    where: PrebuiltPCComponentWhereUniqueInput
  }

  /**
   * PrebuiltPCComponent updateMany
   */
  export type PrebuiltPCComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrebuiltPCComponents.
     */
    data: XOR<PrebuiltPCComponentUpdateManyMutationInput, PrebuiltPCComponentUncheckedUpdateManyInput>
    /**
     * Filter which PrebuiltPCComponents to update
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * Limit how many PrebuiltPCComponents to update.
     */
    limit?: number
  }

  /**
   * PrebuiltPCComponent updateManyAndReturn
   */
  export type PrebuiltPCComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * The data used to update PrebuiltPCComponents.
     */
    data: XOR<PrebuiltPCComponentUpdateManyMutationInput, PrebuiltPCComponentUncheckedUpdateManyInput>
    /**
     * Filter which PrebuiltPCComponents to update
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * Limit how many PrebuiltPCComponents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrebuiltPCComponent upsert
   */
  export type PrebuiltPCComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the PrebuiltPCComponent to update in case it exists.
     */
    where: PrebuiltPCComponentWhereUniqueInput
    /**
     * In case the PrebuiltPCComponent found by the `where` argument doesn't exist, create a new PrebuiltPCComponent with this data.
     */
    create: XOR<PrebuiltPCComponentCreateInput, PrebuiltPCComponentUncheckedCreateInput>
    /**
     * In case the PrebuiltPCComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrebuiltPCComponentUpdateInput, PrebuiltPCComponentUncheckedUpdateInput>
  }

  /**
   * PrebuiltPCComponent delete
   */
  export type PrebuiltPCComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
    /**
     * Filter which PrebuiltPCComponent to delete.
     */
    where: PrebuiltPCComponentWhereUniqueInput
  }

  /**
   * PrebuiltPCComponent deleteMany
   */
  export type PrebuiltPCComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrebuiltPCComponents to delete
     */
    where?: PrebuiltPCComponentWhereInput
    /**
     * Limit how many PrebuiltPCComponents to delete.
     */
    limit?: number
  }

  /**
   * PrebuiltPCComponent without action
   */
  export type PrebuiltPCComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPCComponent
     */
    select?: PrebuiltPCComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPCComponent
     */
    omit?: PrebuiltPCComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCComponentInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: number | null
    discountAmount: number | null
    finalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: number | null
    discountAmount: number | null
    finalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: number | null
    discountAmount: number | null
    finalAmount: number | null
    tossOrderId: string | null
    tossPaymentKey: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: number | null
    discountAmount: number | null
    finalAmount: number | null
    tossOrderId: string | null
    tossPaymentKey: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    totalAmount: number
    discountAmount: number
    finalAmount: number
    tossOrderId: number
    tossPaymentKey: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    totalAmount?: true
    discountAmount?: true
    finalAmount?: true
    tossOrderId?: true
    tossPaymentKey?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    totalAmount?: true
    discountAmount?: true
    finalAmount?: true
    tossOrderId?: true
    tossPaymentKey?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    totalAmount?: true
    discountAmount?: true
    finalAmount?: true
    tossOrderId?: true
    tossPaymentKey?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string | null
    status: $Enums.OrderStatus
    totalAmount: number
    discountAmount: number
    finalAmount: number
    tossOrderId: string | null
    tossPaymentKey: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    tossOrderId?: boolean
    tossPaymentKey?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    tossOrderId?: boolean
    tossPaymentKey?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    tossOrderId?: boolean
    tossPaymentKey?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    tossOrderId?: boolean
    tossPaymentKey?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "totalAmount" | "discountAmount" | "finalAmount" | "tossOrderId" | "tossPaymentKey" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      status: $Enums.OrderStatus
      /**
       * 할인 적용 전 합계
       */
      totalAmount: number
      /**
       * 총 할인액
       */
      discountAmount: number
      /**
       * 실제 결제(승인) 금액. Step 5에서 토스페이먼츠 confirm API 응답의 금액과
       * 이 값을 대조해 위변조 여부를 검증합니다.
       */
      finalAmount: number
      /**
       * 토스페이먼츠에 전달하는 주문 식별자
       */
      tossOrderId: string | null
      /**
       * 결제 승인 후 토스페이먼츠가 발급하는 결제 키
       */
      tossPaymentKey: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalAmount: FieldRef<"Order", 'Int'>
    readonly discountAmount: FieldRef<"Order", 'Int'>
    readonly finalAmount: FieldRef<"Order", 'Int'>
    readonly tossOrderId: FieldRef<"Order", 'String'>
    readonly tossPaymentKey: FieldRef<"Order", 'String'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    prebuiltPCId: string | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    prebuiltPCId: string | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    prebuiltPCId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string | null
    prebuiltPCId: string | null
    quantity: number
    unitPrice: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "prebuiltPCId" | "quantity" | "unitPrice", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | OrderItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | OrderItem$prebuiltPCArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs> | null
      prebuiltPC: Prisma.$PrebuiltPCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string | null
      prebuiltPCId: string | null
      quantity: number
      /**
       * 주문 시점 단가 스냅샷. 이후 상품 가격이 바뀌어도 과거 주문 금액은 불변으로 유지됩니다.
       */
      unitPrice: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends OrderItem$productArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prebuiltPC<T extends OrderItem$prebuiltPCArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$prebuiltPCArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly prebuiltPCId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.product
   */
  export type OrderItem$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * OrderItem.prebuiltPC
   */
  export type OrderItem$prebuiltPCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    where?: PrebuiltPCWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model MemberSession
   */

  export type AggregateMemberSession = {
    _count: MemberSessionCountAggregateOutputType | null
    _min: MemberSessionMinAggregateOutputType | null
    _max: MemberSessionMaxAggregateOutputType | null
  }

  export type MemberSessionMinAggregateOutputType = {
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type MemberSessionMaxAggregateOutputType = {
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type MemberSessionCountAggregateOutputType = {
    tokenHash: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type MemberSessionMinAggregateInputType = {
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type MemberSessionMaxAggregateInputType = {
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type MemberSessionCountAggregateInputType = {
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type MemberSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberSession to aggregate.
     */
    where?: MemberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSessions to fetch.
     */
    orderBy?: MemberSessionOrderByWithRelationInput | MemberSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberSessions
    **/
    _count?: true | MemberSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberSessionMaxAggregateInputType
  }

  export type GetMemberSessionAggregateType<T extends MemberSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberSession[P]>
      : GetScalarType<T[P], AggregateMemberSession[P]>
  }




  export type MemberSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberSessionWhereInput
    orderBy?: MemberSessionOrderByWithAggregationInput | MemberSessionOrderByWithAggregationInput[]
    by: MemberSessionScalarFieldEnum[] | MemberSessionScalarFieldEnum
    having?: MemberSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberSessionCountAggregateInputType | true
    _min?: MemberSessionMinAggregateInputType
    _max?: MemberSessionMaxAggregateInputType
  }

  export type MemberSessionGroupByOutputType = {
    tokenHash: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: MemberSessionCountAggregateOutputType | null
    _min: MemberSessionMinAggregateOutputType | null
    _max: MemberSessionMaxAggregateOutputType | null
  }

  type GetMemberSessionGroupByPayload<T extends MemberSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberSessionGroupByOutputType[P]>
            : GetScalarType<T[P], MemberSessionGroupByOutputType[P]>
        }
      >
    >


  export type MemberSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberSession"]>

  export type MemberSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberSession"]>

  export type MemberSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberSession"]>

  export type MemberSessionSelectScalar = {
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type MemberSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenHash" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["memberSession"]>
  export type MemberSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemberSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemberSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemberSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenHash: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["memberSession"]>
    composites: {}
  }

  type MemberSessionGetPayload<S extends boolean | null | undefined | MemberSessionDefaultArgs> = $Result.GetResult<Prisma.$MemberSessionPayload, S>

  type MemberSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberSessionCountAggregateInputType | true
    }

  export interface MemberSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberSession'], meta: { name: 'MemberSession' } }
    /**
     * Find zero or one MemberSession that matches the filter.
     * @param {MemberSessionFindUniqueArgs} args - Arguments to find a MemberSession
     * @example
     * // Get one MemberSession
     * const memberSession = await prisma.memberSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberSessionFindUniqueArgs>(args: SelectSubset<T, MemberSessionFindUniqueArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberSessionFindUniqueOrThrowArgs} args - Arguments to find a MemberSession
     * @example
     * // Get one MemberSession
     * const memberSession = await prisma.memberSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionFindFirstArgs} args - Arguments to find a MemberSession
     * @example
     * // Get one MemberSession
     * const memberSession = await prisma.memberSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberSessionFindFirstArgs>(args?: SelectSubset<T, MemberSessionFindFirstArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionFindFirstOrThrowArgs} args - Arguments to find a MemberSession
     * @example
     * // Get one MemberSession
     * const memberSession = await prisma.memberSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberSessions
     * const memberSessions = await prisma.memberSession.findMany()
     * 
     * // Get first 10 MemberSessions
     * const memberSessions = await prisma.memberSession.findMany({ take: 10 })
     * 
     * // Only select the `tokenHash`
     * const memberSessionWithTokenHashOnly = await prisma.memberSession.findMany({ select: { tokenHash: true } })
     * 
     */
    findMany<T extends MemberSessionFindManyArgs>(args?: SelectSubset<T, MemberSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberSession.
     * @param {MemberSessionCreateArgs} args - Arguments to create a MemberSession.
     * @example
     * // Create one MemberSession
     * const MemberSession = await prisma.memberSession.create({
     *   data: {
     *     // ... data to create a MemberSession
     *   }
     * })
     * 
     */
    create<T extends MemberSessionCreateArgs>(args: SelectSubset<T, MemberSessionCreateArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberSessions.
     * @param {MemberSessionCreateManyArgs} args - Arguments to create many MemberSessions.
     * @example
     * // Create many MemberSessions
     * const memberSession = await prisma.memberSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberSessionCreateManyArgs>(args?: SelectSubset<T, MemberSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberSessions and returns the data saved in the database.
     * @param {MemberSessionCreateManyAndReturnArgs} args - Arguments to create many MemberSessions.
     * @example
     * // Create many MemberSessions
     * const memberSession = await prisma.memberSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberSessions and only return the `tokenHash`
     * const memberSessionWithTokenHashOnly = await prisma.memberSession.createManyAndReturn({
     *   select: { tokenHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberSession.
     * @param {MemberSessionDeleteArgs} args - Arguments to delete one MemberSession.
     * @example
     * // Delete one MemberSession
     * const MemberSession = await prisma.memberSession.delete({
     *   where: {
     *     // ... filter to delete one MemberSession
     *   }
     * })
     * 
     */
    delete<T extends MemberSessionDeleteArgs>(args: SelectSubset<T, MemberSessionDeleteArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberSession.
     * @param {MemberSessionUpdateArgs} args - Arguments to update one MemberSession.
     * @example
     * // Update one MemberSession
     * const memberSession = await prisma.memberSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberSessionUpdateArgs>(args: SelectSubset<T, MemberSessionUpdateArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberSessions.
     * @param {MemberSessionDeleteManyArgs} args - Arguments to filter MemberSessions to delete.
     * @example
     * // Delete a few MemberSessions
     * const { count } = await prisma.memberSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberSessionDeleteManyArgs>(args?: SelectSubset<T, MemberSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberSessions
     * const memberSession = await prisma.memberSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberSessionUpdateManyArgs>(args: SelectSubset<T, MemberSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberSessions and returns the data updated in the database.
     * @param {MemberSessionUpdateManyAndReturnArgs} args - Arguments to update many MemberSessions.
     * @example
     * // Update many MemberSessions
     * const memberSession = await prisma.memberSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberSessions and only return the `tokenHash`
     * const memberSessionWithTokenHashOnly = await prisma.memberSession.updateManyAndReturn({
     *   select: { tokenHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberSession.
     * @param {MemberSessionUpsertArgs} args - Arguments to update or create a MemberSession.
     * @example
     * // Update or create a MemberSession
     * const memberSession = await prisma.memberSession.upsert({
     *   create: {
     *     // ... data to create a MemberSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberSession we want to update
     *   }
     * })
     */
    upsert<T extends MemberSessionUpsertArgs>(args: SelectSubset<T, MemberSessionUpsertArgs<ExtArgs>>): Prisma__MemberSessionClient<$Result.GetResult<Prisma.$MemberSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionCountArgs} args - Arguments to filter MemberSessions to count.
     * @example
     * // Count the number of MemberSessions
     * const count = await prisma.memberSession.count({
     *   where: {
     *     // ... the filter for the MemberSessions we want to count
     *   }
     * })
    **/
    count<T extends MemberSessionCountArgs>(
      args?: Subset<T, MemberSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberSessionAggregateArgs>(args: Subset<T, MemberSessionAggregateArgs>): Prisma.PrismaPromise<GetMemberSessionAggregateType<T>>

    /**
     * Group by MemberSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberSessionGroupByArgs['orderBy'] }
        : { orderBy?: MemberSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberSession model
   */
  readonly fields: MemberSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberSession model
   */
  interface MemberSessionFieldRefs {
    readonly tokenHash: FieldRef<"MemberSession", 'String'>
    readonly userId: FieldRef<"MemberSession", 'String'>
    readonly expiresAt: FieldRef<"MemberSession", 'DateTime'>
    readonly createdAt: FieldRef<"MemberSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberSession findUnique
   */
  export type MemberSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter, which MemberSession to fetch.
     */
    where: MemberSessionWhereUniqueInput
  }

  /**
   * MemberSession findUniqueOrThrow
   */
  export type MemberSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter, which MemberSession to fetch.
     */
    where: MemberSessionWhereUniqueInput
  }

  /**
   * MemberSession findFirst
   */
  export type MemberSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter, which MemberSession to fetch.
     */
    where?: MemberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSessions to fetch.
     */
    orderBy?: MemberSessionOrderByWithRelationInput | MemberSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberSessions.
     */
    cursor?: MemberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberSessions.
     */
    distinct?: MemberSessionScalarFieldEnum | MemberSessionScalarFieldEnum[]
  }

  /**
   * MemberSession findFirstOrThrow
   */
  export type MemberSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter, which MemberSession to fetch.
     */
    where?: MemberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSessions to fetch.
     */
    orderBy?: MemberSessionOrderByWithRelationInput | MemberSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberSessions.
     */
    cursor?: MemberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberSessions.
     */
    distinct?: MemberSessionScalarFieldEnum | MemberSessionScalarFieldEnum[]
  }

  /**
   * MemberSession findMany
   */
  export type MemberSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter, which MemberSessions to fetch.
     */
    where?: MemberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberSessions to fetch.
     */
    orderBy?: MemberSessionOrderByWithRelationInput | MemberSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberSessions.
     */
    cursor?: MemberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberSessions.
     */
    distinct?: MemberSessionScalarFieldEnum | MemberSessionScalarFieldEnum[]
  }

  /**
   * MemberSession create
   */
  export type MemberSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberSession.
     */
    data: XOR<MemberSessionCreateInput, MemberSessionUncheckedCreateInput>
  }

  /**
   * MemberSession createMany
   */
  export type MemberSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberSessions.
     */
    data: MemberSessionCreateManyInput | MemberSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberSession createManyAndReturn
   */
  export type MemberSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * The data used to create many MemberSessions.
     */
    data: MemberSessionCreateManyInput | MemberSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberSession update
   */
  export type MemberSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberSession.
     */
    data: XOR<MemberSessionUpdateInput, MemberSessionUncheckedUpdateInput>
    /**
     * Choose, which MemberSession to update.
     */
    where: MemberSessionWhereUniqueInput
  }

  /**
   * MemberSession updateMany
   */
  export type MemberSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberSessions.
     */
    data: XOR<MemberSessionUpdateManyMutationInput, MemberSessionUncheckedUpdateManyInput>
    /**
     * Filter which MemberSessions to update
     */
    where?: MemberSessionWhereInput
    /**
     * Limit how many MemberSessions to update.
     */
    limit?: number
  }

  /**
   * MemberSession updateManyAndReturn
   */
  export type MemberSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * The data used to update MemberSessions.
     */
    data: XOR<MemberSessionUpdateManyMutationInput, MemberSessionUncheckedUpdateManyInput>
    /**
     * Filter which MemberSessions to update
     */
    where?: MemberSessionWhereInput
    /**
     * Limit how many MemberSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberSession upsert
   */
  export type MemberSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberSession to update in case it exists.
     */
    where: MemberSessionWhereUniqueInput
    /**
     * In case the MemberSession found by the `where` argument doesn't exist, create a new MemberSession with this data.
     */
    create: XOR<MemberSessionCreateInput, MemberSessionUncheckedCreateInput>
    /**
     * In case the MemberSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberSessionUpdateInput, MemberSessionUncheckedUpdateInput>
  }

  /**
   * MemberSession delete
   */
  export type MemberSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
    /**
     * Filter which MemberSession to delete.
     */
    where: MemberSessionWhereUniqueInput
  }

  /**
   * MemberSession deleteMany
   */
  export type MemberSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberSessions to delete
     */
    where?: MemberSessionWhereInput
    /**
     * Limit how many MemberSessions to delete.
     */
    limit?: number
  }

  /**
   * MemberSession without action
   */
  export type MemberSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberSession
     */
    select?: MemberSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberSession
     */
    omit?: MemberSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberSessionInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    prebuiltPCId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    prebuiltPCId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    prebuiltPCId: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    prebuiltPCId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    userId: string
    productId: string | null
    prebuiltPCId: string | null
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    prebuiltPCId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "prebuiltPCId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartItem$productArgs<ExtArgs>
    prebuiltPC?: boolean | CartItem$prebuiltPCArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs> | null
      prebuiltPC: Prisma.$PrebuiltPCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string | null
      prebuiltPCId: string | null
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends CartItem$productArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prebuiltPC<T extends CartItem$prebuiltPCArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$prebuiltPCArgs<ExtArgs>>): Prisma__PrebuiltPCClient<$Result.GetResult<Prisma.$PrebuiltPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly userId: FieldRef<"CartItem", 'String'>
    readonly productId: FieldRef<"CartItem", 'String'>
    readonly prebuiltPCId: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem.product
   */
  export type CartItem$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * CartItem.prebuiltPC
   */
  export type CartItem$prebuiltPCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrebuiltPC
     */
    select?: PrebuiltPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrebuiltPC
     */
    omit?: PrebuiltPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrebuiltPCInclude<ExtArgs> | null
    where?: PrebuiltPCWhereInput
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model MemberRateLimit
   */

  export type AggregateMemberRateLimit = {
    _count: MemberRateLimitCountAggregateOutputType | null
    _avg: MemberRateLimitAvgAggregateOutputType | null
    _sum: MemberRateLimitSumAggregateOutputType | null
    _min: MemberRateLimitMinAggregateOutputType | null
    _max: MemberRateLimitMaxAggregateOutputType | null
  }

  export type MemberRateLimitAvgAggregateOutputType = {
    attempts: number | null
  }

  export type MemberRateLimitSumAggregateOutputType = {
    attempts: number | null
  }

  export type MemberRateLimitMinAggregateOutputType = {
    key: string | null
    attempts: number | null
    expiresAt: Date | null
  }

  export type MemberRateLimitMaxAggregateOutputType = {
    key: string | null
    attempts: number | null
    expiresAt: Date | null
  }

  export type MemberRateLimitCountAggregateOutputType = {
    key: number
    attempts: number
    expiresAt: number
    _all: number
  }


  export type MemberRateLimitAvgAggregateInputType = {
    attempts?: true
  }

  export type MemberRateLimitSumAggregateInputType = {
    attempts?: true
  }

  export type MemberRateLimitMinAggregateInputType = {
    key?: true
    attempts?: true
    expiresAt?: true
  }

  export type MemberRateLimitMaxAggregateInputType = {
    key?: true
    attempts?: true
    expiresAt?: true
  }

  export type MemberRateLimitCountAggregateInputType = {
    key?: true
    attempts?: true
    expiresAt?: true
    _all?: true
  }

  export type MemberRateLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRateLimit to aggregate.
     */
    where?: MemberRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRateLimits to fetch.
     */
    orderBy?: MemberRateLimitOrderByWithRelationInput | MemberRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberRateLimits
    **/
    _count?: true | MemberRateLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberRateLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberRateLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberRateLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberRateLimitMaxAggregateInputType
  }

  export type GetMemberRateLimitAggregateType<T extends MemberRateLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberRateLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberRateLimit[P]>
      : GetScalarType<T[P], AggregateMemberRateLimit[P]>
  }




  export type MemberRateLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberRateLimitWhereInput
    orderBy?: MemberRateLimitOrderByWithAggregationInput | MemberRateLimitOrderByWithAggregationInput[]
    by: MemberRateLimitScalarFieldEnum[] | MemberRateLimitScalarFieldEnum
    having?: MemberRateLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberRateLimitCountAggregateInputType | true
    _avg?: MemberRateLimitAvgAggregateInputType
    _sum?: MemberRateLimitSumAggregateInputType
    _min?: MemberRateLimitMinAggregateInputType
    _max?: MemberRateLimitMaxAggregateInputType
  }

  export type MemberRateLimitGroupByOutputType = {
    key: string
    attempts: number
    expiresAt: Date
    _count: MemberRateLimitCountAggregateOutputType | null
    _avg: MemberRateLimitAvgAggregateOutputType | null
    _sum: MemberRateLimitSumAggregateOutputType | null
    _min: MemberRateLimitMinAggregateOutputType | null
    _max: MemberRateLimitMaxAggregateOutputType | null
  }

  type GetMemberRateLimitGroupByPayload<T extends MemberRateLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberRateLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberRateLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberRateLimitGroupByOutputType[P]>
            : GetScalarType<T[P], MemberRateLimitGroupByOutputType[P]>
        }
      >
    >


  export type MemberRateLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    attempts?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["memberRateLimit"]>

  export type MemberRateLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    attempts?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["memberRateLimit"]>

  export type MemberRateLimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    attempts?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["memberRateLimit"]>

  export type MemberRateLimitSelectScalar = {
    key?: boolean
    attempts?: boolean
    expiresAt?: boolean
  }

  export type MemberRateLimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "attempts" | "expiresAt", ExtArgs["result"]["memberRateLimit"]>

  export type $MemberRateLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberRateLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      attempts: number
      expiresAt: Date
    }, ExtArgs["result"]["memberRateLimit"]>
    composites: {}
  }

  type MemberRateLimitGetPayload<S extends boolean | null | undefined | MemberRateLimitDefaultArgs> = $Result.GetResult<Prisma.$MemberRateLimitPayload, S>

  type MemberRateLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberRateLimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberRateLimitCountAggregateInputType | true
    }

  export interface MemberRateLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberRateLimit'], meta: { name: 'MemberRateLimit' } }
    /**
     * Find zero or one MemberRateLimit that matches the filter.
     * @param {MemberRateLimitFindUniqueArgs} args - Arguments to find a MemberRateLimit
     * @example
     * // Get one MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberRateLimitFindUniqueArgs>(args: SelectSubset<T, MemberRateLimitFindUniqueArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberRateLimit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberRateLimitFindUniqueOrThrowArgs} args - Arguments to find a MemberRateLimit
     * @example
     * // Get one MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberRateLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberRateLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRateLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitFindFirstArgs} args - Arguments to find a MemberRateLimit
     * @example
     * // Get one MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberRateLimitFindFirstArgs>(args?: SelectSubset<T, MemberRateLimitFindFirstArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRateLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitFindFirstOrThrowArgs} args - Arguments to find a MemberRateLimit
     * @example
     * // Get one MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberRateLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberRateLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberRateLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberRateLimits
     * const memberRateLimits = await prisma.memberRateLimit.findMany()
     * 
     * // Get first 10 MemberRateLimits
     * const memberRateLimits = await prisma.memberRateLimit.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const memberRateLimitWithKeyOnly = await prisma.memberRateLimit.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends MemberRateLimitFindManyArgs>(args?: SelectSubset<T, MemberRateLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberRateLimit.
     * @param {MemberRateLimitCreateArgs} args - Arguments to create a MemberRateLimit.
     * @example
     * // Create one MemberRateLimit
     * const MemberRateLimit = await prisma.memberRateLimit.create({
     *   data: {
     *     // ... data to create a MemberRateLimit
     *   }
     * })
     * 
     */
    create<T extends MemberRateLimitCreateArgs>(args: SelectSubset<T, MemberRateLimitCreateArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberRateLimits.
     * @param {MemberRateLimitCreateManyArgs} args - Arguments to create many MemberRateLimits.
     * @example
     * // Create many MemberRateLimits
     * const memberRateLimit = await prisma.memberRateLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberRateLimitCreateManyArgs>(args?: SelectSubset<T, MemberRateLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberRateLimits and returns the data saved in the database.
     * @param {MemberRateLimitCreateManyAndReturnArgs} args - Arguments to create many MemberRateLimits.
     * @example
     * // Create many MemberRateLimits
     * const memberRateLimit = await prisma.memberRateLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberRateLimits and only return the `key`
     * const memberRateLimitWithKeyOnly = await prisma.memberRateLimit.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberRateLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberRateLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberRateLimit.
     * @param {MemberRateLimitDeleteArgs} args - Arguments to delete one MemberRateLimit.
     * @example
     * // Delete one MemberRateLimit
     * const MemberRateLimit = await prisma.memberRateLimit.delete({
     *   where: {
     *     // ... filter to delete one MemberRateLimit
     *   }
     * })
     * 
     */
    delete<T extends MemberRateLimitDeleteArgs>(args: SelectSubset<T, MemberRateLimitDeleteArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberRateLimit.
     * @param {MemberRateLimitUpdateArgs} args - Arguments to update one MemberRateLimit.
     * @example
     * // Update one MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberRateLimitUpdateArgs>(args: SelectSubset<T, MemberRateLimitUpdateArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberRateLimits.
     * @param {MemberRateLimitDeleteManyArgs} args - Arguments to filter MemberRateLimits to delete.
     * @example
     * // Delete a few MemberRateLimits
     * const { count } = await prisma.memberRateLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberRateLimitDeleteManyArgs>(args?: SelectSubset<T, MemberRateLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberRateLimits
     * const memberRateLimit = await prisma.memberRateLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberRateLimitUpdateManyArgs>(args: SelectSubset<T, MemberRateLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRateLimits and returns the data updated in the database.
     * @param {MemberRateLimitUpdateManyAndReturnArgs} args - Arguments to update many MemberRateLimits.
     * @example
     * // Update many MemberRateLimits
     * const memberRateLimit = await prisma.memberRateLimit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberRateLimits and only return the `key`
     * const memberRateLimitWithKeyOnly = await prisma.memberRateLimit.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberRateLimitUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberRateLimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberRateLimit.
     * @param {MemberRateLimitUpsertArgs} args - Arguments to update or create a MemberRateLimit.
     * @example
     * // Update or create a MemberRateLimit
     * const memberRateLimit = await prisma.memberRateLimit.upsert({
     *   create: {
     *     // ... data to create a MemberRateLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberRateLimit we want to update
     *   }
     * })
     */
    upsert<T extends MemberRateLimitUpsertArgs>(args: SelectSubset<T, MemberRateLimitUpsertArgs<ExtArgs>>): Prisma__MemberRateLimitClient<$Result.GetResult<Prisma.$MemberRateLimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberRateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitCountArgs} args - Arguments to filter MemberRateLimits to count.
     * @example
     * // Count the number of MemberRateLimits
     * const count = await prisma.memberRateLimit.count({
     *   where: {
     *     // ... the filter for the MemberRateLimits we want to count
     *   }
     * })
    **/
    count<T extends MemberRateLimitCountArgs>(
      args?: Subset<T, MemberRateLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberRateLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberRateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberRateLimitAggregateArgs>(args: Subset<T, MemberRateLimitAggregateArgs>): Prisma.PrismaPromise<GetMemberRateLimitAggregateType<T>>

    /**
     * Group by MemberRateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRateLimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberRateLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberRateLimitGroupByArgs['orderBy'] }
        : { orderBy?: MemberRateLimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberRateLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberRateLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberRateLimit model
   */
  readonly fields: MemberRateLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberRateLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberRateLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberRateLimit model
   */
  interface MemberRateLimitFieldRefs {
    readonly key: FieldRef<"MemberRateLimit", 'String'>
    readonly attempts: FieldRef<"MemberRateLimit", 'Int'>
    readonly expiresAt: FieldRef<"MemberRateLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberRateLimit findUnique
   */
  export type MemberRateLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter, which MemberRateLimit to fetch.
     */
    where: MemberRateLimitWhereUniqueInput
  }

  /**
   * MemberRateLimit findUniqueOrThrow
   */
  export type MemberRateLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter, which MemberRateLimit to fetch.
     */
    where: MemberRateLimitWhereUniqueInput
  }

  /**
   * MemberRateLimit findFirst
   */
  export type MemberRateLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter, which MemberRateLimit to fetch.
     */
    where?: MemberRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRateLimits to fetch.
     */
    orderBy?: MemberRateLimitOrderByWithRelationInput | MemberRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRateLimits.
     */
    cursor?: MemberRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRateLimits.
     */
    distinct?: MemberRateLimitScalarFieldEnum | MemberRateLimitScalarFieldEnum[]
  }

  /**
   * MemberRateLimit findFirstOrThrow
   */
  export type MemberRateLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter, which MemberRateLimit to fetch.
     */
    where?: MemberRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRateLimits to fetch.
     */
    orderBy?: MemberRateLimitOrderByWithRelationInput | MemberRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRateLimits.
     */
    cursor?: MemberRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRateLimits.
     */
    distinct?: MemberRateLimitScalarFieldEnum | MemberRateLimitScalarFieldEnum[]
  }

  /**
   * MemberRateLimit findMany
   */
  export type MemberRateLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter, which MemberRateLimits to fetch.
     */
    where?: MemberRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRateLimits to fetch.
     */
    orderBy?: MemberRateLimitOrderByWithRelationInput | MemberRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberRateLimits.
     */
    cursor?: MemberRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRateLimits.
     */
    distinct?: MemberRateLimitScalarFieldEnum | MemberRateLimitScalarFieldEnum[]
  }

  /**
   * MemberRateLimit create
   */
  export type MemberRateLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * The data needed to create a MemberRateLimit.
     */
    data: XOR<MemberRateLimitCreateInput, MemberRateLimitUncheckedCreateInput>
  }

  /**
   * MemberRateLimit createMany
   */
  export type MemberRateLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberRateLimits.
     */
    data: MemberRateLimitCreateManyInput | MemberRateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberRateLimit createManyAndReturn
   */
  export type MemberRateLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * The data used to create many MemberRateLimits.
     */
    data: MemberRateLimitCreateManyInput | MemberRateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberRateLimit update
   */
  export type MemberRateLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * The data needed to update a MemberRateLimit.
     */
    data: XOR<MemberRateLimitUpdateInput, MemberRateLimitUncheckedUpdateInput>
    /**
     * Choose, which MemberRateLimit to update.
     */
    where: MemberRateLimitWhereUniqueInput
  }

  /**
   * MemberRateLimit updateMany
   */
  export type MemberRateLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberRateLimits.
     */
    data: XOR<MemberRateLimitUpdateManyMutationInput, MemberRateLimitUncheckedUpdateManyInput>
    /**
     * Filter which MemberRateLimits to update
     */
    where?: MemberRateLimitWhereInput
    /**
     * Limit how many MemberRateLimits to update.
     */
    limit?: number
  }

  /**
   * MemberRateLimit updateManyAndReturn
   */
  export type MemberRateLimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * The data used to update MemberRateLimits.
     */
    data: XOR<MemberRateLimitUpdateManyMutationInput, MemberRateLimitUncheckedUpdateManyInput>
    /**
     * Filter which MemberRateLimits to update
     */
    where?: MemberRateLimitWhereInput
    /**
     * Limit how many MemberRateLimits to update.
     */
    limit?: number
  }

  /**
   * MemberRateLimit upsert
   */
  export type MemberRateLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * The filter to search for the MemberRateLimit to update in case it exists.
     */
    where: MemberRateLimitWhereUniqueInput
    /**
     * In case the MemberRateLimit found by the `where` argument doesn't exist, create a new MemberRateLimit with this data.
     */
    create: XOR<MemberRateLimitCreateInput, MemberRateLimitUncheckedCreateInput>
    /**
     * In case the MemberRateLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberRateLimitUpdateInput, MemberRateLimitUncheckedUpdateInput>
  }

  /**
   * MemberRateLimit delete
   */
  export type MemberRateLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
    /**
     * Filter which MemberRateLimit to delete.
     */
    where: MemberRateLimitWhereUniqueInput
  }

  /**
   * MemberRateLimit deleteMany
   */
  export type MemberRateLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRateLimits to delete
     */
    where?: MemberRateLimitWhereInput
    /**
     * Limit how many MemberRateLimits to delete.
     */
    limit?: number
  }

  /**
   * MemberRateLimit without action
   */
  export type MemberRateLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRateLimit
     */
    select?: MemberRateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRateLimit
     */
    omit?: MemberRateLimitOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailHash: 'emailHash',
    passwordHash: 'passwordHash',
    name: 'name',
    nameEncrypted: 'nameEncrypted',
    loginId: 'loginId',
    loginIdHash: 'loginIdHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    categoryId: 'categoryId',
    price: 'price',
    discountRate: 'discountRate',
    images: 'images',
    description: 'description',
    marketingContent: 'marketingContent',
    attributes: 'attributes',
    salesCount: 'salesCount',
    stock: 'stock',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PrebuiltPCScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    images: 'images',
    price: 'price',
    discountRate: 'discountRate',
    salesCount: 'salesCount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrebuiltPCScalarFieldEnum = (typeof PrebuiltPCScalarFieldEnum)[keyof typeof PrebuiltPCScalarFieldEnum]


  export const PrebuiltPCComponentScalarFieldEnum: {
    id: 'id',
    prebuiltPCId: 'prebuiltPCId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type PrebuiltPCComponentScalarFieldEnum = (typeof PrebuiltPCComponentScalarFieldEnum)[keyof typeof PrebuiltPCComponentScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    totalAmount: 'totalAmount',
    discountAmount: 'discountAmount',
    finalAmount: 'finalAmount',
    tossOrderId: 'tossOrderId',
    tossPaymentKey: 'tossPaymentKey',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    prebuiltPCId: 'prebuiltPCId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const MemberSessionScalarFieldEnum: {
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type MemberSessionScalarFieldEnum = (typeof MemberSessionScalarFieldEnum)[keyof typeof MemberSessionScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    prebuiltPCId: 'prebuiltPCId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const MemberRateLimitScalarFieldEnum: {
    key: 'key',
    attempts: 'attempts',
    expiresAt: 'expiresAt'
  };

  export type MemberRateLimitScalarFieldEnum = (typeof MemberRateLimitScalarFieldEnum)[keyof typeof MemberRateLimitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CategoryCode'
   */
  export type EnumCategoryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryCode'>
    


  /**
   * Reference to a field of type 'CategoryCode[]'
   */
  export type ListEnumCategoryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryCode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailHash?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nameEncrypted?: BoolFilter<"User"> | boolean
    loginId?: StringNullableFilter<"User"> | string | null
    loginIdHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: MemberSessionListRelationFilter
    cartItems?: CartItemListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    nameEncrypted?: SortOrder
    loginId?: SortOrderInput | SortOrder
    loginIdHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: MemberSessionOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emailHash?: string
    loginIdHash?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nameEncrypted?: BoolFilter<"User"> | boolean
    loginId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: MemberSessionListRelationFilter
    cartItems?: CartItemListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "emailHash" | "loginIdHash">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    nameEncrypted?: SortOrder
    loginId?: SortOrderInput | SortOrder
    loginIdHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailHash?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    nameEncrypted?: BoolWithAggregatesFilter<"User"> | boolean
    loginId?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginIdHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    code?: EnumCategoryCodeFilter<"Category"> | $Enums.CategoryCode
    name?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: $Enums.CategoryCode
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "code">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    code?: EnumCategoryCodeWithAggregatesFilter<"Category"> | $Enums.CategoryCode
    name?: StringWithAggregatesFilter<"Category"> | string
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discountRate?: IntFilter<"Product"> | number
    images?: StringNullableListFilter<"Product">
    description?: StringNullableFilter<"Product"> | string | null
    marketingContent?: JsonNullableFilter<"Product">
    attributes?: JsonFilter<"Product">
    salesCount?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    prebuiltComponents?: PrebuiltPCComponentListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    images?: SortOrder
    description?: SortOrderInput | SortOrder
    marketingContent?: SortOrderInput | SortOrder
    attributes?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    prebuiltComponents?: PrebuiltPCComponentOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discountRate?: IntFilter<"Product"> | number
    images?: StringNullableListFilter<"Product">
    description?: StringNullableFilter<"Product"> | string | null
    marketingContent?: JsonNullableFilter<"Product">
    attributes?: JsonFilter<"Product">
    salesCount?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    prebuiltComponents?: PrebuiltPCComponentListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    images?: SortOrder
    description?: SortOrderInput | SortOrder
    marketingContent?: SortOrderInput | SortOrder
    attributes?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    discountRate?: IntWithAggregatesFilter<"Product"> | number
    images?: StringNullableListFilter<"Product">
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    marketingContent?: JsonNullableWithAggregatesFilter<"Product">
    attributes?: JsonWithAggregatesFilter<"Product">
    salesCount?: IntWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PrebuiltPCWhereInput = {
    AND?: PrebuiltPCWhereInput | PrebuiltPCWhereInput[]
    OR?: PrebuiltPCWhereInput[]
    NOT?: PrebuiltPCWhereInput | PrebuiltPCWhereInput[]
    id?: StringFilter<"PrebuiltPC"> | string
    name?: StringFilter<"PrebuiltPC"> | string
    description?: StringNullableFilter<"PrebuiltPC"> | string | null
    images?: StringNullableListFilter<"PrebuiltPC">
    price?: IntFilter<"PrebuiltPC"> | number
    discountRate?: IntFilter<"PrebuiltPC"> | number
    salesCount?: IntFilter<"PrebuiltPC"> | number
    isActive?: BoolFilter<"PrebuiltPC"> | boolean
    createdAt?: DateTimeFilter<"PrebuiltPC"> | Date | string
    updatedAt?: DateTimeFilter<"PrebuiltPC"> | Date | string
    components?: PrebuiltPCComponentListRelationFilter
    orderItems?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
  }

  export type PrebuiltPCOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    components?: PrebuiltPCComponentOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type PrebuiltPCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrebuiltPCWhereInput | PrebuiltPCWhereInput[]
    OR?: PrebuiltPCWhereInput[]
    NOT?: PrebuiltPCWhereInput | PrebuiltPCWhereInput[]
    name?: StringFilter<"PrebuiltPC"> | string
    description?: StringNullableFilter<"PrebuiltPC"> | string | null
    images?: StringNullableListFilter<"PrebuiltPC">
    price?: IntFilter<"PrebuiltPC"> | number
    discountRate?: IntFilter<"PrebuiltPC"> | number
    salesCount?: IntFilter<"PrebuiltPC"> | number
    isActive?: BoolFilter<"PrebuiltPC"> | boolean
    createdAt?: DateTimeFilter<"PrebuiltPC"> | Date | string
    updatedAt?: DateTimeFilter<"PrebuiltPC"> | Date | string
    components?: PrebuiltPCComponentListRelationFilter
    orderItems?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
  }, "id">

  export type PrebuiltPCOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrebuiltPCCountOrderByAggregateInput
    _avg?: PrebuiltPCAvgOrderByAggregateInput
    _max?: PrebuiltPCMaxOrderByAggregateInput
    _min?: PrebuiltPCMinOrderByAggregateInput
    _sum?: PrebuiltPCSumOrderByAggregateInput
  }

  export type PrebuiltPCScalarWhereWithAggregatesInput = {
    AND?: PrebuiltPCScalarWhereWithAggregatesInput | PrebuiltPCScalarWhereWithAggregatesInput[]
    OR?: PrebuiltPCScalarWhereWithAggregatesInput[]
    NOT?: PrebuiltPCScalarWhereWithAggregatesInput | PrebuiltPCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrebuiltPC"> | string
    name?: StringWithAggregatesFilter<"PrebuiltPC"> | string
    description?: StringNullableWithAggregatesFilter<"PrebuiltPC"> | string | null
    images?: StringNullableListFilter<"PrebuiltPC">
    price?: IntWithAggregatesFilter<"PrebuiltPC"> | number
    discountRate?: IntWithAggregatesFilter<"PrebuiltPC"> | number
    salesCount?: IntWithAggregatesFilter<"PrebuiltPC"> | number
    isActive?: BoolWithAggregatesFilter<"PrebuiltPC"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PrebuiltPC"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrebuiltPC"> | Date | string
  }

  export type PrebuiltPCComponentWhereInput = {
    AND?: PrebuiltPCComponentWhereInput | PrebuiltPCComponentWhereInput[]
    OR?: PrebuiltPCComponentWhereInput[]
    NOT?: PrebuiltPCComponentWhereInput | PrebuiltPCComponentWhereInput[]
    id?: StringFilter<"PrebuiltPCComponent"> | string
    prebuiltPCId?: StringFilter<"PrebuiltPCComponent"> | string
    productId?: StringFilter<"PrebuiltPCComponent"> | string
    quantity?: IntFilter<"PrebuiltPCComponent"> | number
    prebuiltPC?: XOR<PrebuiltPCScalarRelationFilter, PrebuiltPCWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type PrebuiltPCComponentOrderByWithRelationInput = {
    id?: SortOrder
    prebuiltPCId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    prebuiltPC?: PrebuiltPCOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PrebuiltPCComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    prebuiltPCId_productId?: PrebuiltPCComponentPrebuiltPCIdProductIdCompoundUniqueInput
    AND?: PrebuiltPCComponentWhereInput | PrebuiltPCComponentWhereInput[]
    OR?: PrebuiltPCComponentWhereInput[]
    NOT?: PrebuiltPCComponentWhereInput | PrebuiltPCComponentWhereInput[]
    prebuiltPCId?: StringFilter<"PrebuiltPCComponent"> | string
    productId?: StringFilter<"PrebuiltPCComponent"> | string
    quantity?: IntFilter<"PrebuiltPCComponent"> | number
    prebuiltPC?: XOR<PrebuiltPCScalarRelationFilter, PrebuiltPCWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "prebuiltPCId_productId">

  export type PrebuiltPCComponentOrderByWithAggregationInput = {
    id?: SortOrder
    prebuiltPCId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: PrebuiltPCComponentCountOrderByAggregateInput
    _avg?: PrebuiltPCComponentAvgOrderByAggregateInput
    _max?: PrebuiltPCComponentMaxOrderByAggregateInput
    _min?: PrebuiltPCComponentMinOrderByAggregateInput
    _sum?: PrebuiltPCComponentSumOrderByAggregateInput
  }

  export type PrebuiltPCComponentScalarWhereWithAggregatesInput = {
    AND?: PrebuiltPCComponentScalarWhereWithAggregatesInput | PrebuiltPCComponentScalarWhereWithAggregatesInput[]
    OR?: PrebuiltPCComponentScalarWhereWithAggregatesInput[]
    NOT?: PrebuiltPCComponentScalarWhereWithAggregatesInput | PrebuiltPCComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrebuiltPCComponent"> | string
    prebuiltPCId?: StringWithAggregatesFilter<"PrebuiltPCComponent"> | string
    productId?: StringWithAggregatesFilter<"PrebuiltPCComponent"> | string
    quantity?: IntWithAggregatesFilter<"PrebuiltPCComponent"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: IntFilter<"Order"> | number
    discountAmount?: IntFilter<"Order"> | number
    finalAmount?: IntFilter<"Order"> | number
    tossOrderId?: StringNullableFilter<"Order"> | string | null
    tossPaymentKey?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    tossOrderId?: SortOrderInput | SortOrder
    tossPaymentKey?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tossOrderId?: string
    tossPaymentKey?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: IntFilter<"Order"> | number
    discountAmount?: IntFilter<"Order"> | number
    finalAmount?: IntFilter<"Order"> | number
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
  }, "id" | "tossOrderId" | "tossPaymentKey">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    tossOrderId?: SortOrderInput | SortOrder
    tossPaymentKey?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: IntWithAggregatesFilter<"Order"> | number
    discountAmount?: IntWithAggregatesFilter<"Order"> | number
    finalAmount?: IntWithAggregatesFilter<"Order"> | number
    tossOrderId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    tossPaymentKey?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringNullableFilter<"OrderItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    prebuiltPC?: XOR<PrebuiltPCNullableScalarRelationFilter, PrebuiltPCWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrderInput | SortOrder
    prebuiltPCId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    prebuiltPC?: PrebuiltPCOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringNullableFilter<"OrderItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    prebuiltPC?: XOR<PrebuiltPCNullableScalarRelationFilter, PrebuiltPCWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrderInput | SortOrder
    prebuiltPCId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    prebuiltPCId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type MemberSessionWhereInput = {
    AND?: MemberSessionWhereInput | MemberSessionWhereInput[]
    OR?: MemberSessionWhereInput[]
    NOT?: MemberSessionWhereInput | MemberSessionWhereInput[]
    tokenHash?: StringFilter<"MemberSession"> | string
    userId?: StringFilter<"MemberSession"> | string
    expiresAt?: DateTimeFilter<"MemberSession"> | Date | string
    createdAt?: DateTimeFilter<"MemberSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MemberSessionOrderByWithRelationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MemberSessionWhereUniqueInput = Prisma.AtLeast<{
    tokenHash?: string
    AND?: MemberSessionWhereInput | MemberSessionWhereInput[]
    OR?: MemberSessionWhereInput[]
    NOT?: MemberSessionWhereInput | MemberSessionWhereInput[]
    userId?: StringFilter<"MemberSession"> | string
    expiresAt?: DateTimeFilter<"MemberSession"> | Date | string
    createdAt?: DateTimeFilter<"MemberSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tokenHash">

  export type MemberSessionOrderByWithAggregationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: MemberSessionCountOrderByAggregateInput
    _max?: MemberSessionMaxOrderByAggregateInput
    _min?: MemberSessionMinOrderByAggregateInput
  }

  export type MemberSessionScalarWhereWithAggregatesInput = {
    AND?: MemberSessionScalarWhereWithAggregatesInput | MemberSessionScalarWhereWithAggregatesInput[]
    OR?: MemberSessionScalarWhereWithAggregatesInput[]
    NOT?: MemberSessionScalarWhereWithAggregatesInput | MemberSessionScalarWhereWithAggregatesInput[]
    tokenHash?: StringWithAggregatesFilter<"MemberSession"> | string
    userId?: StringWithAggregatesFilter<"MemberSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"MemberSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MemberSession"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    userId?: StringFilter<"CartItem"> | string
    productId?: StringNullableFilter<"CartItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"CartItem"> | string | null
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    prebuiltPC?: XOR<PrebuiltPCNullableScalarRelationFilter, PrebuiltPCWhereInput> | null
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrderInput | SortOrder
    prebuiltPCId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    prebuiltPC?: PrebuiltPCOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: CartItemUserIdProductIdCompoundUniqueInput
    userId_prebuiltPCId?: CartItemUserIdPrebuiltPCIdCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    userId?: StringFilter<"CartItem"> | string
    productId?: StringNullableFilter<"CartItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"CartItem"> | string | null
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    prebuiltPC?: XOR<PrebuiltPCNullableScalarRelationFilter, PrebuiltPCWhereInput> | null
  }, "id" | "userId_productId" | "userId_prebuiltPCId">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrderInput | SortOrder
    prebuiltPCId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    userId?: StringWithAggregatesFilter<"CartItem"> | string
    productId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    prebuiltPCId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type MemberRateLimitWhereInput = {
    AND?: MemberRateLimitWhereInput | MemberRateLimitWhereInput[]
    OR?: MemberRateLimitWhereInput[]
    NOT?: MemberRateLimitWhereInput | MemberRateLimitWhereInput[]
    key?: StringFilter<"MemberRateLimit"> | string
    attempts?: IntFilter<"MemberRateLimit"> | number
    expiresAt?: DateTimeFilter<"MemberRateLimit"> | Date | string
  }

  export type MemberRateLimitOrderByWithRelationInput = {
    key?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
  }

  export type MemberRateLimitWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: MemberRateLimitWhereInput | MemberRateLimitWhereInput[]
    OR?: MemberRateLimitWhereInput[]
    NOT?: MemberRateLimitWhereInput | MemberRateLimitWhereInput[]
    attempts?: IntFilter<"MemberRateLimit"> | number
    expiresAt?: DateTimeFilter<"MemberRateLimit"> | Date | string
  }, "key">

  export type MemberRateLimitOrderByWithAggregationInput = {
    key?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    _count?: MemberRateLimitCountOrderByAggregateInput
    _avg?: MemberRateLimitAvgOrderByAggregateInput
    _max?: MemberRateLimitMaxOrderByAggregateInput
    _min?: MemberRateLimitMinOrderByAggregateInput
    _sum?: MemberRateLimitSumOrderByAggregateInput
  }

  export type MemberRateLimitScalarWhereWithAggregatesInput = {
    AND?: MemberRateLimitScalarWhereWithAggregatesInput | MemberRateLimitScalarWhereWithAggregatesInput[]
    OR?: MemberRateLimitScalarWhereWithAggregatesInput[]
    NOT?: MemberRateLimitScalarWhereWithAggregatesInput | MemberRateLimitScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"MemberRateLimit"> | string
    attempts?: IntWithAggregatesFilter<"MemberRateLimit"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"MemberRateLimit"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    code: $Enums.CategoryCode
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    code: $Enums.CategoryCode
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    code: $Enums.CategoryCode
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrebuiltPCCreateInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentCreateNestedManyWithoutPrebuiltPCInput
    orderItems?: OrderItemCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutPrebuiltPCInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUpdateManyWithoutPrebuiltPCNestedInput
    orderItems?: OrderItemUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type PrebuiltPCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type PrebuiltPCCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrebuiltPCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrebuiltPCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrebuiltPCComponentCreateInput = {
    id?: string
    quantity?: number
    prebuiltPC: PrebuiltPCCreateNestedOneWithoutComponentsInput
    product: ProductCreateNestedOneWithoutPrebuiltComponentsInput
  }

  export type PrebuiltPCComponentUncheckedCreateInput = {
    id?: string
    prebuiltPCId: string
    productId: string
    quantity?: number
  }

  export type PrebuiltPCComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prebuiltPC?: PrebuiltPCUpdateOneRequiredWithoutComponentsNestedInput
    product?: ProductUpdateOneRequiredWithoutPrebuiltComponentsNestedInput
  }

  export type PrebuiltPCComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentCreateManyInput = {
    id?: string
    prebuiltPCId: string
    productId: string
    quantity?: number
  }

  export type PrebuiltPCComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity?: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutItemsInput
    product?: ProductCreateNestedOneWithoutOrderItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneWithoutOrderItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type MemberSessionCreateInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type MemberSessionUncheckedCreateInput = {
    tokenHash: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MemberSessionUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type MemberSessionUncheckedUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSessionCreateManyInput = {
    tokenHash: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MemberSessionUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSessionUncheckedUpdateManyInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemsInput
    product?: ProductCreateNestedOneWithoutCartItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    userId: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneWithoutCartItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: string
    userId: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRateLimitCreateInput = {
    key: string
    attempts?: number
    expiresAt: Date | string
  }

  export type MemberRateLimitUncheckedCreateInput = {
    key: string
    attempts?: number
    expiresAt: Date | string
  }

  export type MemberRateLimitUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRateLimitUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRateLimitCreateManyInput = {
    key: string
    attempts?: number
    expiresAt: Date | string
  }

  export type MemberRateLimitUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberRateLimitUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MemberSessionListRelationFilter = {
    every?: MemberSessionWhereInput
    some?: MemberSessionWhereInput
    none?: MemberSessionWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemberSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    nameEncrypted?: SortOrder
    loginId?: SortOrder
    loginIdHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    nameEncrypted?: SortOrder
    loginId?: SortOrder
    loginIdHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailHash?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    nameEncrypted?: SortOrder
    loginId?: SortOrder
    loginIdHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCategoryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryCode | EnumCategoryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryCodeFilter<$PrismaModel> | $Enums.CategoryCode
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumCategoryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryCode | EnumCategoryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryCodeFilter<$PrismaModel>
    _max?: NestedEnumCategoryCodeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type PrebuiltPCComponentListRelationFilter = {
    every?: PrebuiltPCComponentWhereInput
    some?: PrebuiltPCComponentWhereInput
    none?: PrebuiltPCComponentWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrebuiltPCComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    images?: SortOrder
    description?: SortOrder
    marketingContent?: SortOrder
    attributes?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    description?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    description?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    stock?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PrebuiltPCCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrebuiltPCAvgOrderByAggregateInput = {
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
  }

  export type PrebuiltPCMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrebuiltPCMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrebuiltPCSumOrderByAggregateInput = {
    price?: SortOrder
    discountRate?: SortOrder
    salesCount?: SortOrder
  }

  export type PrebuiltPCScalarRelationFilter = {
    is?: PrebuiltPCWhereInput
    isNot?: PrebuiltPCWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PrebuiltPCComponentPrebuiltPCIdProductIdCompoundUniqueInput = {
    prebuiltPCId: string
    productId: string
  }

  export type PrebuiltPCComponentCountOrderByAggregateInput = {
    id?: SortOrder
    prebuiltPCId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type PrebuiltPCComponentAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type PrebuiltPCComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    prebuiltPCId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type PrebuiltPCComponentMinOrderByAggregateInput = {
    id?: SortOrder
    prebuiltPCId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type PrebuiltPCComponentSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    tossOrderId?: SortOrder
    tossPaymentKey?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    tossOrderId?: SortOrder
    tossPaymentKey?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    tossOrderId?: SortOrder
    tossPaymentKey?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type PrebuiltPCNullableScalarRelationFilter = {
    is?: PrebuiltPCWhereInput | null
    isNot?: PrebuiltPCWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MemberSessionCountOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberSessionMaxOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberSessionMinOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type CartItemUserIdPrebuiltPCIdCompoundUniqueInput = {
    userId: string
    prebuiltPCId: string
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    prebuiltPCId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MemberRateLimitCountOrderByAggregateInput = {
    key?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
  }

  export type MemberRateLimitAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type MemberRateLimitMaxOrderByAggregateInput = {
    key?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
  }

  export type MemberRateLimitMinOrderByAggregateInput = {
    key?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
  }

  export type MemberRateLimitSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type MemberSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput> | MemberSessionCreateWithoutUserInput[] | MemberSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberSessionCreateOrConnectWithoutUserInput | MemberSessionCreateOrConnectWithoutUserInput[]
    createMany?: MemberSessionCreateManyUserInputEnvelope
    connect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MemberSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput> | MemberSessionCreateWithoutUserInput[] | MemberSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberSessionCreateOrConnectWithoutUserInput | MemberSessionCreateOrConnectWithoutUserInput[]
    createMany?: MemberSessionCreateManyUserInputEnvelope
    connect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MemberSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput> | MemberSessionCreateWithoutUserInput[] | MemberSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberSessionCreateOrConnectWithoutUserInput | MemberSessionCreateOrConnectWithoutUserInput[]
    upsert?: MemberSessionUpsertWithWhereUniqueWithoutUserInput | MemberSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberSessionCreateManyUserInputEnvelope
    set?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    disconnect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    delete?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    connect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    update?: MemberSessionUpdateWithWhereUniqueWithoutUserInput | MemberSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberSessionUpdateManyWithWhereWithoutUserInput | MemberSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberSessionScalarWhereInput | MemberSessionScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MemberSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput> | MemberSessionCreateWithoutUserInput[] | MemberSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberSessionCreateOrConnectWithoutUserInput | MemberSessionCreateOrConnectWithoutUserInput[]
    upsert?: MemberSessionUpsertWithWhereUniqueWithoutUserInput | MemberSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberSessionCreateManyUserInputEnvelope
    set?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    disconnect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    delete?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    connect?: MemberSessionWhereUniqueInput | MemberSessionWhereUniqueInput[]
    update?: MemberSessionUpdateWithWhereUniqueWithoutUserInput | MemberSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberSessionUpdateManyWithWhereWithoutUserInput | MemberSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberSessionScalarWhereInput | MemberSessionScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type EnumCategoryCodeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryCode
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateimagesInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PrebuiltPCComponentCreateNestedManyWithoutProductInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput> | PrebuiltPCComponentCreateWithoutProductInput[] | PrebuiltPCComponentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutProductInput | PrebuiltPCComponentCreateOrConnectWithoutProductInput[]
    createMany?: PrebuiltPCComponentCreateManyProductInputEnvelope
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PrebuiltPCComponentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput> | PrebuiltPCComponentCreateWithoutProductInput[] | PrebuiltPCComponentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutProductInput | PrebuiltPCComponentCreateOrConnectWithoutProductInput[]
    createMany?: PrebuiltPCComponentCreateManyProductInputEnvelope
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
  }

  export type ProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PrebuiltPCComponentUpdateManyWithoutProductNestedInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput> | PrebuiltPCComponentCreateWithoutProductInput[] | PrebuiltPCComponentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutProductInput | PrebuiltPCComponentCreateOrConnectWithoutProductInput[]
    upsert?: PrebuiltPCComponentUpsertWithWhereUniqueWithoutProductInput | PrebuiltPCComponentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PrebuiltPCComponentCreateManyProductInputEnvelope
    set?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    disconnect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    delete?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    update?: PrebuiltPCComponentUpdateWithWhereUniqueWithoutProductInput | PrebuiltPCComponentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PrebuiltPCComponentUpdateManyWithWhereWithoutProductInput | PrebuiltPCComponentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PrebuiltPCComponentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput> | PrebuiltPCComponentCreateWithoutProductInput[] | PrebuiltPCComponentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutProductInput | PrebuiltPCComponentCreateOrConnectWithoutProductInput[]
    upsert?: PrebuiltPCComponentUpsertWithWhereUniqueWithoutProductInput | PrebuiltPCComponentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PrebuiltPCComponentCreateManyProductInputEnvelope
    set?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    disconnect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    delete?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    update?: PrebuiltPCComponentUpdateWithWhereUniqueWithoutProductInput | PrebuiltPCComponentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PrebuiltPCComponentUpdateManyWithWhereWithoutProductInput | PrebuiltPCComponentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
  }

  export type PrebuiltPCCreateimagesInput = {
    set: string[]
  }

  export type PrebuiltPCComponentCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput> | PrebuiltPCComponentCreateWithoutPrebuiltPCInput[] | PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput | PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: PrebuiltPCComponentCreateManyPrebuiltPCInputEnvelope
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput> | OrderItemCreateWithoutPrebuiltPCInput[] | OrderItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrebuiltPCInput | OrderItemCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: OrderItemCreateManyPrebuiltPCInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput> | CartItemCreateWithoutPrebuiltPCInput[] | CartItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPrebuiltPCInput | CartItemCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: CartItemCreateManyPrebuiltPCInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type PrebuiltPCComponentUncheckedCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput> | PrebuiltPCComponentCreateWithoutPrebuiltPCInput[] | PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput | PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: PrebuiltPCComponentCreateManyPrebuiltPCInputEnvelope
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput> | OrderItemCreateWithoutPrebuiltPCInput[] | OrderItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrebuiltPCInput | OrderItemCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: OrderItemCreateManyPrebuiltPCInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutPrebuiltPCInput = {
    create?: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput> | CartItemCreateWithoutPrebuiltPCInput[] | CartItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPrebuiltPCInput | CartItemCreateOrConnectWithoutPrebuiltPCInput[]
    createMany?: CartItemCreateManyPrebuiltPCInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type PrebuiltPCUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PrebuiltPCComponentUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput> | PrebuiltPCComponentCreateWithoutPrebuiltPCInput[] | PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput | PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: PrebuiltPCComponentUpsertWithWhereUniqueWithoutPrebuiltPCInput | PrebuiltPCComponentUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: PrebuiltPCComponentCreateManyPrebuiltPCInputEnvelope
    set?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    disconnect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    delete?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    update?: PrebuiltPCComponentUpdateWithWhereUniqueWithoutPrebuiltPCInput | PrebuiltPCComponentUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: PrebuiltPCComponentUpdateManyWithWhereWithoutPrebuiltPCInput | PrebuiltPCComponentUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput> | OrderItemCreateWithoutPrebuiltPCInput[] | OrderItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrebuiltPCInput | OrderItemCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPrebuiltPCInput | OrderItemUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: OrderItemCreateManyPrebuiltPCInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPrebuiltPCInput | OrderItemUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPrebuiltPCInput | OrderItemUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput> | CartItemCreateWithoutPrebuiltPCInput[] | CartItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPrebuiltPCInput | CartItemCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutPrebuiltPCInput | CartItemUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: CartItemCreateManyPrebuiltPCInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutPrebuiltPCInput | CartItemUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutPrebuiltPCInput | CartItemUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput> | PrebuiltPCComponentCreateWithoutPrebuiltPCInput[] | PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput | PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: PrebuiltPCComponentUpsertWithWhereUniqueWithoutPrebuiltPCInput | PrebuiltPCComponentUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: PrebuiltPCComponentCreateManyPrebuiltPCInputEnvelope
    set?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    disconnect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    delete?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    connect?: PrebuiltPCComponentWhereUniqueInput | PrebuiltPCComponentWhereUniqueInput[]
    update?: PrebuiltPCComponentUpdateWithWhereUniqueWithoutPrebuiltPCInput | PrebuiltPCComponentUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: PrebuiltPCComponentUpdateManyWithWhereWithoutPrebuiltPCInput | PrebuiltPCComponentUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput> | OrderItemCreateWithoutPrebuiltPCInput[] | OrderItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPrebuiltPCInput | OrderItemCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPrebuiltPCInput | OrderItemUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: OrderItemCreateManyPrebuiltPCInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPrebuiltPCInput | OrderItemUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPrebuiltPCInput | OrderItemUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput = {
    create?: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput> | CartItemCreateWithoutPrebuiltPCInput[] | CartItemUncheckedCreateWithoutPrebuiltPCInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutPrebuiltPCInput | CartItemCreateOrConnectWithoutPrebuiltPCInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutPrebuiltPCInput | CartItemUpsertWithWhereUniqueWithoutPrebuiltPCInput[]
    createMany?: CartItemCreateManyPrebuiltPCInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutPrebuiltPCInput | CartItemUpdateWithWhereUniqueWithoutPrebuiltPCInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutPrebuiltPCInput | CartItemUpdateManyWithWhereWithoutPrebuiltPCInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type PrebuiltPCCreateNestedOneWithoutComponentsInput = {
    create?: XOR<PrebuiltPCCreateWithoutComponentsInput, PrebuiltPCUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutComponentsInput
    connect?: PrebuiltPCWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPrebuiltComponentsInput = {
    create?: XOR<ProductCreateWithoutPrebuiltComponentsInput, ProductUncheckedCreateWithoutPrebuiltComponentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPrebuiltComponentsInput
    connect?: ProductWhereUniqueInput
  }

  export type PrebuiltPCUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: XOR<PrebuiltPCCreateWithoutComponentsInput, PrebuiltPCUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutComponentsInput
    upsert?: PrebuiltPCUpsertWithoutComponentsInput
    connect?: PrebuiltPCWhereUniqueInput
    update?: XOR<XOR<PrebuiltPCUpdateToOneWithWhereWithoutComponentsInput, PrebuiltPCUpdateWithoutComponentsInput>, PrebuiltPCUncheckedUpdateWithoutComponentsInput>
  }

  export type ProductUpdateOneRequiredWithoutPrebuiltComponentsNestedInput = {
    create?: XOR<ProductCreateWithoutPrebuiltComponentsInput, ProductUncheckedCreateWithoutPrebuiltComponentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPrebuiltComponentsInput
    upsert?: ProductUpsertWithoutPrebuiltComponentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPrebuiltComponentsInput, ProductUpdateWithoutPrebuiltComponentsInput>, ProductUncheckedUpdateWithoutPrebuiltComponentsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type PrebuiltPCCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<PrebuiltPCCreateWithoutOrderItemsInput, PrebuiltPCUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutOrderItemsInput
    connect?: PrebuiltPCWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PrebuiltPCUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<PrebuiltPCCreateWithoutOrderItemsInput, PrebuiltPCUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutOrderItemsInput
    upsert?: PrebuiltPCUpsertWithoutOrderItemsInput
    disconnect?: PrebuiltPCWhereInput | boolean
    delete?: PrebuiltPCWhereInput | boolean
    connect?: PrebuiltPCWhereUniqueInput
    update?: XOR<XOR<PrebuiltPCUpdateToOneWithWhereWithoutOrderItemsInput, PrebuiltPCUpdateWithoutOrderItemsInput>, PrebuiltPCUncheckedUpdateWithoutOrderItemsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type PrebuiltPCCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<PrebuiltPCCreateWithoutCartItemsInput, PrebuiltPCUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutCartItemsInput
    connect?: PrebuiltPCWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    upsert?: UserUpsertWithoutCartItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartItemsInput, UserUpdateWithoutCartItemsInput>, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateOneWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    upsert?: ProductUpsertWithoutCartItemsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type PrebuiltPCUpdateOneWithoutCartItemsNestedInput = {
    create?: XOR<PrebuiltPCCreateWithoutCartItemsInput, PrebuiltPCUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: PrebuiltPCCreateOrConnectWithoutCartItemsInput
    upsert?: PrebuiltPCUpsertWithoutCartItemsInput
    disconnect?: PrebuiltPCWhereInput | boolean
    delete?: PrebuiltPCWhereInput | boolean
    connect?: PrebuiltPCWhereUniqueInput
    update?: XOR<XOR<PrebuiltPCUpdateToOneWithWhereWithoutCartItemsInput, PrebuiltPCUpdateWithoutCartItemsInput>, PrebuiltPCUncheckedUpdateWithoutCartItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryCode | EnumCategoryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryCodeFilter<$PrismaModel> | $Enums.CategoryCode
  }

  export type NestedEnumCategoryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryCode | EnumCategoryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryCode[] | ListEnumCategoryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryCodeFilter<$PrismaModel>
    _max?: NestedEnumCategoryCodeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MemberSessionCreateWithoutUserInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MemberSessionUncheckedCreateWithoutUserInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MemberSessionCreateOrConnectWithoutUserInput = {
    where: MemberSessionWhereUniqueInput
    create: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput>
  }

  export type MemberSessionCreateManyUserInputEnvelope = {
    data: MemberSessionCreateManyUserInput | MemberSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutUserInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutCartItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutUserInput = {
    id?: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutUserInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemCreateManyUserInputEnvelope = {
    data: CartItemCreateManyUserInput | CartItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemberSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberSessionWhereUniqueInput
    update: XOR<MemberSessionUpdateWithoutUserInput, MemberSessionUncheckedUpdateWithoutUserInput>
    create: XOR<MemberSessionCreateWithoutUserInput, MemberSessionUncheckedCreateWithoutUserInput>
  }

  export type MemberSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberSessionWhereUniqueInput
    data: XOR<MemberSessionUpdateWithoutUserInput, MemberSessionUncheckedUpdateWithoutUserInput>
  }

  export type MemberSessionUpdateManyWithWhereWithoutUserInput = {
    where: MemberSessionScalarWhereInput
    data: XOR<MemberSessionUpdateManyMutationInput, MemberSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type MemberSessionScalarWhereInput = {
    AND?: MemberSessionScalarWhereInput | MemberSessionScalarWhereInput[]
    OR?: MemberSessionScalarWhereInput[]
    NOT?: MemberSessionScalarWhereInput | MemberSessionScalarWhereInput[]
    tokenHash?: StringFilter<"MemberSession"> | string
    userId?: StringFilter<"MemberSession"> | string
    expiresAt?: DateTimeFilter<"MemberSession"> | Date | string
    createdAt?: DateTimeFilter<"MemberSession"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
  }

  export type CartItemUpdateManyWithWhereWithoutUserInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutUserInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    userId?: StringFilter<"CartItem"> | string
    productId?: StringNullableFilter<"CartItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"CartItem"> | string | null
    quantity?: IntFilter<"CartItem"> | number
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: IntFilter<"Order"> | number
    discountAmount?: IntFilter<"Order"> | number
    finalAmount?: IntFilter<"Order"> | number
    tossOrderId?: StringNullableFilter<"Order"> | string | null
    tossPaymentKey?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discountRate?: IntFilter<"Product"> | number
    images?: StringNullableListFilter<"Product">
    description?: StringNullableFilter<"Product"> | string | null
    marketingContent?: JsonNullableFilter<"Product">
    attributes?: JsonFilter<"Product">
    salesCount?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    code: $Enums.CategoryCode
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    code: $Enums.CategoryCode
    name: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CartItemCreateWithoutProductInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity?: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PrebuiltPCComponentCreateWithoutProductInput = {
    id?: string
    quantity?: number
    prebuiltPC: PrebuiltPCCreateNestedOneWithoutComponentsInput
  }

  export type PrebuiltPCComponentUncheckedCreateWithoutProductInput = {
    id?: string
    prebuiltPCId: string
    quantity?: number
  }

  export type PrebuiltPCComponentCreateOrConnectWithoutProductInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    create: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput>
  }

  export type PrebuiltPCComponentCreateManyProductInputEnvelope = {
    data: PrebuiltPCComponentCreateManyProductInput | PrebuiltPCComponentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumCategoryCodeFieldUpdateOperationsInput | $Enums.CategoryCode
    name?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringNullableFilter<"OrderItem"> | string | null
    prebuiltPCId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: IntFilter<"OrderItem"> | number
  }

  export type PrebuiltPCComponentUpsertWithWhereUniqueWithoutProductInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    update: XOR<PrebuiltPCComponentUpdateWithoutProductInput, PrebuiltPCComponentUncheckedUpdateWithoutProductInput>
    create: XOR<PrebuiltPCComponentCreateWithoutProductInput, PrebuiltPCComponentUncheckedCreateWithoutProductInput>
  }

  export type PrebuiltPCComponentUpdateWithWhereUniqueWithoutProductInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    data: XOR<PrebuiltPCComponentUpdateWithoutProductInput, PrebuiltPCComponentUncheckedUpdateWithoutProductInput>
  }

  export type PrebuiltPCComponentUpdateManyWithWhereWithoutProductInput = {
    where: PrebuiltPCComponentScalarWhereInput
    data: XOR<PrebuiltPCComponentUpdateManyMutationInput, PrebuiltPCComponentUncheckedUpdateManyWithoutProductInput>
  }

  export type PrebuiltPCComponentScalarWhereInput = {
    AND?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
    OR?: PrebuiltPCComponentScalarWhereInput[]
    NOT?: PrebuiltPCComponentScalarWhereInput | PrebuiltPCComponentScalarWhereInput[]
    id?: StringFilter<"PrebuiltPCComponent"> | string
    prebuiltPCId?: StringFilter<"PrebuiltPCComponent"> | string
    productId?: StringFilter<"PrebuiltPCComponent"> | string
    quantity?: IntFilter<"PrebuiltPCComponent"> | number
  }

  export type PrebuiltPCComponentCreateWithoutPrebuiltPCInput = {
    id?: string
    quantity?: number
    product: ProductCreateNestedOneWithoutPrebuiltComponentsInput
  }

  export type PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput = {
    id?: string
    productId: string
    quantity?: number
  }

  export type PrebuiltPCComponentCreateOrConnectWithoutPrebuiltPCInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    create: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type PrebuiltPCComponentCreateManyPrebuiltPCInputEnvelope = {
    data: PrebuiltPCComponentCreateManyPrebuiltPCInput | PrebuiltPCComponentCreateManyPrebuiltPCInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutPrebuiltPCInput = {
    id?: string
    quantity?: number
    unitPrice: number
    order: OrderCreateNestedOneWithoutItemsInput
    product?: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutPrebuiltPCInput = {
    id?: string
    orderId: string
    productId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemCreateOrConnectWithoutPrebuiltPCInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type OrderItemCreateManyPrebuiltPCInputEnvelope = {
    data: OrderItemCreateManyPrebuiltPCInput | OrderItemCreateManyPrebuiltPCInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutPrebuiltPCInput = {
    id?: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemsInput
    product?: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutPrebuiltPCInput = {
    id?: string
    userId: string
    productId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutPrebuiltPCInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type CartItemCreateManyPrebuiltPCInputEnvelope = {
    data: CartItemCreateManyPrebuiltPCInput | CartItemCreateManyPrebuiltPCInput[]
    skipDuplicates?: boolean
  }

  export type PrebuiltPCComponentUpsertWithWhereUniqueWithoutPrebuiltPCInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    update: XOR<PrebuiltPCComponentUpdateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedUpdateWithoutPrebuiltPCInput>
    create: XOR<PrebuiltPCComponentCreateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type PrebuiltPCComponentUpdateWithWhereUniqueWithoutPrebuiltPCInput = {
    where: PrebuiltPCComponentWhereUniqueInput
    data: XOR<PrebuiltPCComponentUpdateWithoutPrebuiltPCInput, PrebuiltPCComponentUncheckedUpdateWithoutPrebuiltPCInput>
  }

  export type PrebuiltPCComponentUpdateManyWithWhereWithoutPrebuiltPCInput = {
    where: PrebuiltPCComponentScalarWhereInput
    data: XOR<PrebuiltPCComponentUpdateManyMutationInput, PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutPrebuiltPCInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutPrebuiltPCInput, OrderItemUncheckedUpdateWithoutPrebuiltPCInput>
    create: XOR<OrderItemCreateWithoutPrebuiltPCInput, OrderItemUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutPrebuiltPCInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutPrebuiltPCInput, OrderItemUncheckedUpdateWithoutPrebuiltPCInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutPrebuiltPCInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutPrebuiltPCInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutPrebuiltPCInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutPrebuiltPCInput, CartItemUncheckedUpdateWithoutPrebuiltPCInput>
    create: XOR<CartItemCreateWithoutPrebuiltPCInput, CartItemUncheckedCreateWithoutPrebuiltPCInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutPrebuiltPCInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutPrebuiltPCInput, CartItemUncheckedUpdateWithoutPrebuiltPCInput>
  }

  export type CartItemUpdateManyWithWhereWithoutPrebuiltPCInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutPrebuiltPCInput>
  }

  export type PrebuiltPCCreateWithoutComponentsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCUncheckedCreateWithoutComponentsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCCreateOrConnectWithoutComponentsInput = {
    where: PrebuiltPCWhereUniqueInput
    create: XOR<PrebuiltPCCreateWithoutComponentsInput, PrebuiltPCUncheckedCreateWithoutComponentsInput>
  }

  export type ProductCreateWithoutPrebuiltComponentsInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPrebuiltComponentsInput = {
    id?: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPrebuiltComponentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPrebuiltComponentsInput, ProductUncheckedCreateWithoutPrebuiltComponentsInput>
  }

  export type PrebuiltPCUpsertWithoutComponentsInput = {
    update: XOR<PrebuiltPCUpdateWithoutComponentsInput, PrebuiltPCUncheckedUpdateWithoutComponentsInput>
    create: XOR<PrebuiltPCCreateWithoutComponentsInput, PrebuiltPCUncheckedCreateWithoutComponentsInput>
    where?: PrebuiltPCWhereInput
  }

  export type PrebuiltPCUpdateToOneWithWhereWithoutComponentsInput = {
    where?: PrebuiltPCWhereInput
    data: XOR<PrebuiltPCUpdateWithoutComponentsInput, PrebuiltPCUncheckedUpdateWithoutComponentsInput>
  }

  export type PrebuiltPCUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type PrebuiltPCUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type ProductUpsertWithoutPrebuiltComponentsInput = {
    update: XOR<ProductUpdateWithoutPrebuiltComponentsInput, ProductUncheckedUpdateWithoutPrebuiltComponentsInput>
    create: XOR<ProductCreateWithoutPrebuiltComponentsInput, ProductUncheckedCreateWithoutPrebuiltComponentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPrebuiltComponentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPrebuiltComponentsInput, ProductUncheckedUpdateWithoutPrebuiltComponentsInput>
  }

  export type ProductUpdateWithoutPrebuiltComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPrebuiltComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionCreateNestedManyWithoutUserInput
    cartItems?: CartItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionUncheckedCreateNestedManyWithoutUserInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity?: number
    unitPrice: number
    product?: ProductCreateNestedOneWithoutOrderItemsInput
    prebuiltPC?: PrebuiltPCCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUncheckedUpdateManyWithoutUserNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type PrebuiltPCCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutPrebuiltPCInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCCreateOrConnectWithoutOrderItemsInput = {
    where: PrebuiltPCWhereUniqueInput
    create: XOR<PrebuiltPCCreateWithoutOrderItemsInput, PrebuiltPCUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PrebuiltPCUpsertWithoutOrderItemsInput = {
    update: XOR<PrebuiltPCUpdateWithoutOrderItemsInput, PrebuiltPCUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<PrebuiltPCCreateWithoutOrderItemsInput, PrebuiltPCUncheckedCreateWithoutOrderItemsInput>
    where?: PrebuiltPCWhereInput
  }

  export type PrebuiltPCUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: PrebuiltPCWhereInput
    data: XOR<PrebuiltPCUpdateWithoutOrderItemsInput, PrebuiltPCUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PrebuiltPCUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type PrebuiltPCUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCartItemsInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartItemsInput = {
    id?: string
    email: string
    emailHash: string
    passwordHash: string
    name: string
    nameEncrypted?: boolean
    loginId?: string | null
    loginIdHash?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: MemberSessionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductCreateWithoutCartItemsInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: string
    name: string
    brand: string
    categoryId: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
  }

  export type PrebuiltPCCreateWithoutCartItemsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentCreateNestedManyWithoutPrebuiltPCInput
    orderItems?: OrderItemCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCUncheckedCreateWithoutCartItemsInput = {
    id?: string
    name: string
    description?: string | null
    images?: PrebuiltPCCreateimagesInput | string[]
    price: number
    discountRate?: number
    salesCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: PrebuiltPCComponentUncheckedCreateNestedManyWithoutPrebuiltPCInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPrebuiltPCInput
  }

  export type PrebuiltPCCreateOrConnectWithoutCartItemsInput = {
    where: PrebuiltPCWhereUniqueInput
    create: XOR<PrebuiltPCCreateWithoutCartItemsInput, PrebuiltPCUncheckedCreateWithoutCartItemsInput>
  }

  export type UserUpsertWithoutCartItemsInput = {
    update: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailHash?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameEncrypted?: BoolFieldUpdateOperationsInput | boolean
    loginId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIdHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MemberSessionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PrebuiltPCUpsertWithoutCartItemsInput = {
    update: XOR<PrebuiltPCUpdateWithoutCartItemsInput, PrebuiltPCUncheckedUpdateWithoutCartItemsInput>
    create: XOR<PrebuiltPCCreateWithoutCartItemsInput, PrebuiltPCUncheckedCreateWithoutCartItemsInput>
    where?: PrebuiltPCWhereInput
  }

  export type PrebuiltPCUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: PrebuiltPCWhereInput
    data: XOR<PrebuiltPCUpdateWithoutCartItemsInput, PrebuiltPCUncheckedUpdateWithoutCartItemsInput>
  }

  export type PrebuiltPCUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUpdateManyWithoutPrebuiltPCNestedInput
    orderItems?: OrderItemUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type PrebuiltPCUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PrebuiltPCUpdateimagesInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPrebuiltPCNestedInput
  }

  export type MemberSessionCreateManyUserInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CartItemCreateManyUserInput = {
    id?: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    totalAmount: number
    discountAmount?: number
    finalAmount: number
    tossOrderId?: string | null
    tossPaymentKey?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberSessionUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSessionUncheckedUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberSessionUncheckedUpdateManyWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutCartItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    discountAmount?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    tossOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    tossPaymentKey?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    brand: string
    price: number
    discountRate?: number
    images?: ProductCreateimagesInput | string[]
    description?: string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes: JsonNullValueInput | InputJsonValue
    salesCount?: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    prebuiltComponents?: PrebuiltPCComponentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discountRate?: IntFieldUpdateOperationsInput | number
    images?: ProductUpdateimagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingContent?: NullableJsonNullValueInput | InputJsonValue
    attributes?: JsonNullValueInput | InputJsonValue
    salesCount?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyProductInput = {
    id?: string
    userId: string
    prebuiltPCId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type PrebuiltPCComponentCreateManyProductInput = {
    id?: string
    prebuiltPCId: string
    quantity?: number
  }

  export type CartItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prebuiltPC?: PrebuiltPCUpdateOneRequiredWithoutComponentsNestedInput
  }

  export type PrebuiltPCComponentUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    prebuiltPCId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentCreateManyPrebuiltPCInput = {
    id?: string
    productId: string
    quantity?: number
  }

  export type OrderItemCreateManyPrebuiltPCInput = {
    id?: string
    orderId: string
    productId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type CartItemCreateManyPrebuiltPCInput = {
    id?: string
    userId: string
    productId?: string | null
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrebuiltPCComponentUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutPrebuiltComponentsNestedInput
  }

  export type PrebuiltPCComponentUncheckedUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrebuiltPCComponentUncheckedUpdateManyWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    product?: ProductUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutPrebuiltPCInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId?: string | null
    prebuiltPCId?: string | null
    quantity?: number
    unitPrice: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneWithoutOrderItemsNestedInput
    prebuiltPC?: PrebuiltPCUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    prebuiltPCId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}