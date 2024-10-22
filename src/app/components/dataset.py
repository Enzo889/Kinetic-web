from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar el archivo CSV
data = pd.read_csv('src/app/components/data.csv')

# Mostrar las primeras filas del conjunto de datos
print(data.head())

# Verificar información general sobre el DataFrame
print(data.info())

# Describir estadísticas básicas
print(data.describe())

# Eliminar duplicados
data = data.drop_duplicates()

# Verificar valores nulos
print(data.isnull().sum())

# Imputar valores nulos con la media (ejemplo para una columna numérica)
data['Cantidad'].fillna(data['Cantidad'].mean(), inplace=True)

# O eliminar filas con valores nulos
data.dropna(inplace=True)

# Ejemplo: corregir errores tipográficos en la columna 'Producto'
data['Producto'] = data['Producto'].replace(
    {'Electrónica': 'Electronica', 'electronica': 'Electronica'})


scaler = MinMaxScaler()
data[['Cantidad', 'Precio']] = scaler.fit_transform(
    data[['Cantidad', 'Precio']])

data = pd.get_dummies(data, columns=['Producto'], drop_first=True)

data['Total_Gastado'] = data['Cantidad'] * data['Precio']

plt.figure(figsize=(10, 6))
sns.histplot(data['Total_Gastado'], bins=30, kde=True)
plt.title('Distribución del Total Gastado')
plt.xlabel('Total Gastado')
plt.ylabel('Frecuencia')
plt.show()


print(data[['Cantidad', 'Precio', 'Total_Gastado']].describe())


# Definir variables independientes y dependientes
X = data[['Cantidad', 'Precio']]  # Variables independientes
y = data['Total_Gastado']           # Variable dependiente

# Dividir el conjunto de datos en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Crear un modelo de regresión lineal
model = LinearRegression()
model.fit(X_train, y_train)

# Hacer predicciones
predictions = model.predict(X_test)


# Gráfico de comparación entre predicciones y valores reales (opcional)
plt.scatter(y_test, predictions)
plt.xlabel('Valores Reales')
plt.ylabel('Predicciones')
plt.title('Comparación entre Valores Reales y Predicciones')
plt.show()
