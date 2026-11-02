const AdminDashboardPage = async () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        Дашборд адміністратора
      </h1>
      <p className="text-slate-600">
        Ця сторінка використовує окремий макет AdminLayout із власним сайдбаром і не містить шапки публічного сайту.
      </p>
    </div>
  );
}

export default AdminDashboardPage;