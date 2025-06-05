import ctypes

try:
    ctypes.WinDLL("cudart64_110.dll")
    print("✅ cudart64_110.dll encontrada y cargada correctamente.")
except OSError as e:
    print("❌ No se pudo cargar cudart64_110.dll:", e)
